import { db } from '../database'
import { v4 as uuid } from 'uuid';

export const createUserRoute = {
    method: 'POST',
    path: '/api/users',
    handler: async (req, h) => {
        const id = uuid();
        const {first_name = '', last_name = '', email = '' , username = '', password = '' } = req.payload;
        await db.query(
            `INSERT INTO USERS
                VALUES (?, ?, ?, ?, ?, ?)`
            ,[id, first_name, last_name, email, username, password]
        );

        const { result } = db.query(
            `SELECT FIRST_NAME, LAST_NAME, EMAIL, USERNAME FROM USERS WHERE ID = ?`
            ,[id]
        );
        return result
    }
}