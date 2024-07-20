import { NextFunction, Request, Response } from "express";
import passport from "passport";
import Admin from "../models/admin.model";
import { IUser } from "../interfaces/user.interface";

export type TRole = "user" | "admin" | "super-admin";

export const verifyUser = (...requiredRole: TRole[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        passport.authenticate('jwt', { session: false }, async (err: any, user: IUser | false, info: any) => {

            if (err) {
                return next(err);
            }

            // if user is not matched then send the message
            if (!user) {
                return res.status(401).send({ message: "Unauthorized Access" });
            }


            // check the user role are included in the array or not
            const isMatchedRole = requiredRole.includes(user.role as TRole);

            if (!isMatchedRole) {
                return res.status(401).send({ message: "Unauthorized Access" });
            }

            // if user's role are admin then check with admin id the admin are exists or not
            if (user.role == "admin" || user.role == "super-admin") {
                const isExistAdmin = await Admin.findById(user.admin);
                if (!isExistAdmin) {
                    return res.status(401).send({ message: "Unauthorized Access" });
                }
            }

            // if user is found then set the user at the request 
            req.user = user;
            next();
        })(req, res, next);
    }
}

export default verifyUser;