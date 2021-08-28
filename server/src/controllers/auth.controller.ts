import { Request, Response } from "express";
import path from 'path'
import config from "../config/config";
import { Login, Register } from "../middlewares/Auth";
import { createDir } from "../middlewares/Dirs";

export class AuthController {

    async Login(req: Request, res: Response) {        

        const login = await Login(req.body)

        if (!login.success) return res.json({
            success: false,
            errors: login.errors
        })

        return res.json({
            success: true,
            message: `Welcome back ${login.user}`,
            access_token: login.token
        })

    }

    async Register(req: Request, res: Response) {

        /* console.log(req.protocol + "://" + req.get('host')) */
        const { success, errors, user } = await Register(req.body);

        if (!success) return res.json({ errors, success })

        const dirPath = config.DIR_PATH;
        const dir = path.join(dirPath, user);
        await createDir(dir);

        return res.json({
            success,
            message: `Welcome ${user}`
        })
    }

    ChangePassword(req: Request, res: Response) {

    }

    ForgottenPassword(req: Request, res: Response) {

    }

    CheckEmail(req: Request, res: Response) {

    }

}