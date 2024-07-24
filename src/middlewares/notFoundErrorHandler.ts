import { RequestHandler } from "express"

const notFoundErrorHandler: RequestHandler = (req, res, next) => {
    res.status(404).send({ message: "The specified route cannot be located or identified." })
}

export default notFoundErrorHandler;