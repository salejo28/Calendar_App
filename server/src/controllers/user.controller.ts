import { Request, Response } from "express";
import path from 'path';
import config from "../config/config";
import { DeleteFile } from "../lib/DeleteFile";
import { MoveFile } from "../lib/MoveFile";
import { DeleteUser, EditUser } from "../middlewares/User";
import { DeleteById, GetById, UpdateById } from "../sql/Sql";

export class UserController {

    async GetUser(req: Request, res: Response) {
        const { id } = req.user;
        const user = await GetById("users", id);

        if (Object.keys(user).length === 0) return res.json({
            success: false,
            message: "This user not exist"
        })

        return res.json({
            success: true,
            user
        })
    }

    async UploadFile(req: Request, res: Response) {
        const { id } = req.user;

        const user: any = await GetById("users", id);
        const dirPath: string = path.join(config.DIR_PATH, user[0].username);

        if (user[0].image !== null) {
            await DeleteFile(user[0].image)
        }
        
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.json({
                success: false,
                message: "No files selected!"
            })
        }
        const file: any = req.files.img_user;
        await MoveFile(file, dirPath, res);
        await UpdateById("users", id, {
            image: path.join(dirPath, file.name)
        });
        
        return res.json({
            message: "Image Updated!"
        })
    }

    async UpdateUser(req: Request, res: Response) {
        const { id, username } = req.user;
        const body = req.body;
        const response = await EditUser(body, id, username);
        if (!response.success) return res.json({
            success: response.success,
            error: response.error
        })

        return res.json({
            success: true,
            message: 'User updated'
        })
    }

    async DeleteUser(req: Request, res: Response) {
        const { id, username } = req.user;
        await DeleteUser(id, username);
        return res.json({
            success: true,
            message: "User deleted successfully"
        })
    }

}