import path from 'path';
import fs from 'fs';

export const DeleteFile = (path: string) => {
    return new Promise((resolve, reject) => {
        fs.promises.access(path)
            .then(() => resolve(fs.promises.unlink(path)))
            .catch((error) => reject(error))
    })
}