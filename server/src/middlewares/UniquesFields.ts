import pool from '../Db'

export async function CheckUniqueEmail(email: string) {
    const user = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

    return Object.keys(user).length > 0;
}

export async function CheckUniqueUsername(username:string) {
    const user = await pool.query('SELECT * FROM users WHERE email = ?', [username]);
    
    return Object.keys(user).length > 0;
}