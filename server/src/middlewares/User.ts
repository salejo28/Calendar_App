import path from 'path'
import fs from 'fs'
import config from '../config/config';
import { CheckUniqueEmail, CheckUniqueUsername } from "./UniquesFields";
import { createToken } from './Token';
import { Hash } from '../security/password';
import { checkEmail, validatePassword } from '../utils/validations';
import { DeleteById, UpdateById } from '../sql/Sql';
import { DeleteDir } from './Dirs';

export async function EditUser(body: {} | any, id: number | string, username: string): Promise<any> {

    if (body.hasOwnProperty("username")) {
        const exist = await CheckUniqueUsername(body.username);
        if (exist) return {
            error: 'Username is already exists!',
            success: false,
        }
        const dirPath = path.join(config.DIR_PATH, username);
        const newDirPath = path.join(config.DIR_PATH, body.username);
        await fs.promises.rename(dirPath, newDirPath);
    }
    let token: string
    if (body.hasOwnProperty("username")) {
        token = createToken(id, body.username);
    } else {
        token = createToken(id, username);
    }

    if (body.hasOwnProperty("email")) {
        if (!checkEmail(body.email)) return {
            error: "Invalid Email!",
            success: false
        }
        const exist = await CheckUniqueEmail(body.email);
        if (exist) return {
            error: 'Email is already exists!',
            success: false
        }
    }

    if (body.hasOwnProperty("password")) {
        if (validatePassword(body.password)) {        
            body.password = await Hash(body.password);
        } else {
            return {
                success: false,
                error: 'Password must be eight characters or longer'
            }
        }
    }

    await UpdateById("users", id, body);

    return {
        success: true,
        token
    }

}

export async function DeleteUser(id: number | string, username: string): Promise<void> {
    const dirPath = path.join(config.DIR_PATH, username);
    await DeleteDir(dirPath);
    await DeleteById("users", id);
}