import fs from 'fs'
import path from 'path'
import { DeleteFile } from '../lib/DeleteFile';

export async function createDir(dirPath: string) {
    try {
        await fs.promises.mkdir(dirPath)
    } catch (error) {
        console.log(error)
    }
}

export async function DeleteDir(dirpath: string) {
    const files = await fs.promises.readdir(dirpath);
    if (files.length === 0) {
        await fs.promises.rmdir(dirpath)
    } else {
        await files.map(async file => {
            try {
                const p = path.join(dirpath, file);
                const stat = await fs.promises.lstat(p)
                if (stat.isDirectory()) {
                    await DeleteDir(p);
                } else {
                    await DeleteFile(p);
                }

                await fs.promises.rmdir(dirpath);
            } catch (error) {
                console.log(error)
            }
        })
    }
}