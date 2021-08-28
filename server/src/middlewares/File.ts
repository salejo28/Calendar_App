import { Response } from 'express';
import path from 'path'
import config from '../config/config'
import { File } from '../interfaces/File';
import { DeleteFile } from '../lib/DeleteFile';
import { MoveFile } from '../lib/MoveFile';
import { GetById, GetByRelation, Save } from '../sql/Sql';

export async function UploadFiles(reqFiles: any, username: string, user_id: string | number, event_id: string | number, res: Response) {
    const dirPath = path.join(config.DIR_PATH, username);
    let files: any = reqFiles['file']
    if (!Array.isArray(files)) {
        files = [files]
    }

    try {
        for (let file of files) {
            const filePath = path.join(dirPath, file.name)
            const fileToSave: File = {
                url: filePath,
                user_id,
                event_id
            }
            await Save("files", fileToSave);
            await MoveFile(file, filePath, res)
        }
    } catch (error) {
        console.log(error)
    }
}

export async function GetFiles(event_id: string | number) {
    const files = await GetByRelation("files", "event_id", event_id)
    return files;
}

export async function Delete(id: string | number) {
    const file: any = await GetById("files", id);
    await DeleteFile(file[0].url);
}