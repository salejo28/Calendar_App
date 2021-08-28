import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import config from '../config/config'

declare global {
    namespace Express {
        interface Request {
            user: any
        }
    }
}

export function authenticate(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Access Denied'
            })
        }

        const verify = jwt.verify(token, <string>config.JWT.SECRET_KEY)
        if (!verify) {
            return res.status(401).json({
                success: false,
                message: 'Invalid Token'
            })
        }
        
        req.user = verify;
        next();
    } catch (error) {
        return res.send(error)
    }
}