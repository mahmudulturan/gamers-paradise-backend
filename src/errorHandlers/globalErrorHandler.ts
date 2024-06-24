import { ErrorRequestHandler, NextFunction } from "express"

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).send({ message: err.message })
}

export default globalErrorHandler;