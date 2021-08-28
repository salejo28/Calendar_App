import path from 'path';

import config from '../config/config';


const slash = process.platform === 'win32' ? '\\' : '/';

export const processPath = (pathUrl: string, username: string) => {

    const storage: string = <string>config.DIR_PATH + username // "/home/santiago/storage/user_id"

    const relativePath = pathUrl ? pathUrl.replace(/-/g, slash) : slash;
    const absoluePath = path.join(storage, relativePath);

    return absoluePath;
}