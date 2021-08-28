import pool from '../Db'

export async function Save(table: string, data: {}) {
    return await pool.query(`INSERT INTO ${table} SET ?`, [data]);
}

export async function GetAll(table: string) {
    return await pool.query(`SELECT * FROM ${table}`);
}

export async function GetByEmail(email: string) {
    return await pool.query(`SELECT * FROM users WHERE email = ?`, [email])
}

export async function GetById(table: string, id: number | string) {
    return await pool.query(`SELECT * FROM ${table} WHERE id = ?`, [id]);
}

export async function GetByRelation(table: string, relation: string, value: string | number) {
    return await pool.query(`SELECT * FROM ${table} WHERE ${relation} = ?`, [value]);
}

export async function DeleteById(table: string, id: number | string) {
    return await pool.query(`DELETE FROM ${table} WHERE id = ?`, [id]);
}

export async function UpdateById(table: string, id: number | string, data: {}) {
    return await pool.query(`UPDATE ${table} SET ? WHERE id = ?`, [data, id]);
}