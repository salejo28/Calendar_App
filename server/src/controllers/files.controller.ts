import { Request, Response } from "express";
import mime from 'mime-types';
import { Delete, GetFiles, UploadFiles } from "../middlewares/File";
import { processPath } from "../lib/Path";

export class FilesControllers {

    DownloadFile(req: Request, res: Response) {
        const filePath = req.params.path;
        const { username } = req.user;
        const file = processPath(filePath, username);
        console.log(file)
        const mimeType: string = <string>mime.lookup(file)
        res.setHeader('Content-Disposition', `attachment; filename=${file}`)
        res.setHeader('Content-Type', mimeType);
        res.download(file)
    }

    async GetFiles(req: Request, res: Response) {
        const { event_id } = req.params
        const files = await GetFiles(event_id);
        return res.json({ files });
    }

    async UploadFiles(req: Request, res: Response) {

        const { id, username } = req.user;
        const { event_id } = req.body;
        
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.json({
                success: false,
                message: "No files selected!"
            })
        }

        await UploadFiles(req.files, username, id, event_id, res)
        
        return res.json({
            message: "Received!"
        })
    }

    UpdateFile(req: Request, res: Response) {

    }

    async DeleteFiles(req: Request, res: Response) {
        const { id } = req.params
        await Delete(id);
        return res.json({
            message: 'File Deleted!'
        })
    }

}