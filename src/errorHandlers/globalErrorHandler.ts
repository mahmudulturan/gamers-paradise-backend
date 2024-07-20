import { ErrorRequestHandler } from "express";
import handleCastError from "../errors/handleCastError";
import AppError from "../errors/AppError";
import handleDuplicateError from "../errors/handleDuplicateError";
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
    } else if (err.code === 11000) {                             // handle duplicate error with code 1000
        const simplifiedDuplicateError = handleDuplicateError(err);
        status = simplifiedDuplicateError?.statusCode;
        message = simplifiedDuplicateError?.message;
        errorMessages = simplifiedDuplicateError?.errorSources;
    } else if (err.name === "CastError") {                      // handle cast error
        const simplifiedCastError = handleCastError(err);
        status = simplifiedCastError?.statusCode;
        message = simplifiedCastError?.message;
        errorMessages = simplifiedCastError?.errorSources;
    } else if (err instanceof AppError) {                   // handle custom app error
        status = err.statusCode;
        message = err?.message;
        errorMessages = [
            {
                path: '',
                message: err?.message,
            },
        ];
    } 

    res.status(status).send({
        success: false,
        message,
        errorMessages,
        stack: dot_env.node_env === "development" ? err.stack : null
    })
}

export default globalErrorHandler;