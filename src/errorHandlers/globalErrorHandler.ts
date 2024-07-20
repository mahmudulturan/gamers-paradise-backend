import { ErrorRequestHandler } from "express";
import handleValidationError from "../errors/handleValidationError";
import dot_env from "../configs/dotenv";

export type TErrorSources = {
    path: string | number,
    message: string
}[];


export type TGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorSources: TErrorSources
}

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {

    let status = 500;
    let message = 'Something Went Wrong';
    let errorMessages: TErrorSources = [
        {
            path: "",
            message: ""
        }
    ]

    if (err.name === 'ValidationError') {                 // handle mongoose validation error
        const simplifiedMongooseError = handleValidationError(err);
        errorMessages = simplifiedMongooseError.errorSources;
        status = simplifiedMongooseError.statusCode;
        message = simplifiedMongooseError.message;
    } 

    res.status(status).send({
        success: false,
        message,
        errorMessages,
        stack: dot_env.node_env === "development" ? err.stack : null
    })
}

export default globalErrorHandler;