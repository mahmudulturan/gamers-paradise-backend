import { Response } from "express";

type TSendResponse = (res: Response, status: number, message: string, data: any) => void;

const sendResponse: TSendResponse = (res, status, message, data) => {
    res.status(status).send({ success: true, message, data });
}

export default sendResponse;