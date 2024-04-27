import passport from 'passport';
import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';
import User from '../models/user.model';
import { Request, } from 'express';

const tokenSecret = process.env.JWT_TOKEN;
if (!tokenSecret) throw new Error("JWT_TOKEN is missing in env file");

// function for getting cookie from req.cookies
const cookieExtractor = (req: Request) => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies['token'];
    }
    return token;
};

// options for get tplem from cookie
const options: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
    secretOrKey: tokenSecret,
};

// stratagy for jwt
passport.use(new Strategy(options, async (jwt_payload, done) => {
    try {
        const user = await User.findOne({ _id: jwt_payload.id }).select("-password");
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    } catch (error) {
        return done(error, false);
    }
}));
