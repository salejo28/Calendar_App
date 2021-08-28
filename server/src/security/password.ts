import bcrypt from 'bcryptjs';

export async function Hash(password: string) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    return hash;
}

export async function ComparePasswords(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
}