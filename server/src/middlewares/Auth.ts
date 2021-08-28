import publicIp from 'public-ip';
import { User } from '../interfaces/User';
import { ComparePasswords, Hash } from '../security/password';
import { GetByEmail, Save } from '../sql/Sql'
import { ValidateFormLogin, ValidateFormRegister } from '../utils/validations';
import { createToken } from './Token';
import { CheckUniqueEmail, CheckUniqueUsername } from './UniquesFields';

export async function Login(data: any) {
    const { errors, valid } = ValidateFormLogin(data);
    if (!valid) return ({ errors, success: false });

    const user: any = await GetByEmail(data.email);
    if (user.length === 0) {
        return {
            errors: {
                path: ["email"],
                message: "The user with this email not exist"
            },
            success: false
        }
    }

    const matchPasswords = await ComparePasswords(data.password, user[0].password)
    if (!matchPasswords) return {
        errors: {
            path: ["password"],
            message: "Incorrect password"
        },
        success: false
    }

    const token = createToken(user[0].id, user[0].username);

    return {
        success: true,
        user: user[0].username,
        token
    }

}

export async function Register(data: any) {
    const { errors, valid } = ValidateFormRegister(data);
    if (!valid) return ({ errors, success: false });

    const existEmail = await CheckUniqueEmail(data.email);
    if (existEmail) return ({
        errors: {
            path: ["email"],
            message: "Email is already in use"
        },
        success: false
    })

    const existUsername = await CheckUniqueUsername(data.username);
    if (existUsername) return ({
        errors: {
            path: ["username"],
            message: "Username is already in use"
        },
        success: false
    })

    const hashedPassword = await Hash(data.password)
    const dataToSave: User = {
        username:data.username,
        fullname: data.fullname,
        password: hashedPassword,
        email: data.email,
        image: `https://ui-avatars.com/api/?name=${data.fullname}&background=random&color=random`,
        ip_address: await publicIp.v4()
    }

    await Save("users", dataToSave);

    return {
        success: true,
        user: data.username
    }

}