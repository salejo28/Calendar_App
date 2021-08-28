import jwt from 'jsonwebtoken'
import config from '../config/config'

export function createToken(user: string | number, username: string) {

    return jwt.sign({
        id: user,
        username   
    }, <string>config.JWT.SECRET_KEY);

}