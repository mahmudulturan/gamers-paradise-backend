import { Response } from "express";

type TSendResponse = (res: Response, status: number, success: boolean, message: string, data: any) => void;

const sendResponse: TSendResponse = (res, status, success, message, data) => {
    res.status(status).send({ success, message, data });
}

export default sendResponse;