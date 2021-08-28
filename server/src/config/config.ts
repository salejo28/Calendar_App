import path from 'path'

export default {
    PORT: process.env.PORT || 4000,
    DB: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        passowrd: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    },
    JWT: {
        SECRET_KEY: process.env.SECRET_TOKEN
    },
    DIR_PATH: path.join(__dirname, '../uploads/')
}