import { db } from '../database';
import { v4 as uuid } from 'uuid';
import Boom from '@hapi/boom';
import bcrypt from 'bcrypt';


export const createUserRoute = {
    method: 'POST',
    path: '/api/users',
    handler: async (req, h) => {
        try {
            const id = uuid();
            const { first_name = '', last_name = '', email = '', username = '', password = '' } = req.payload;
            
            const hashedPassword = await bcrypt.hash(password, 10);


            await db.query(
                `INSERT INTO USERS
                    VALUES (?, ?, ?, ?, ?, ?)`
                , [id, first_name, last_name, email, username, hashedPassword]
            );

            const result = {
                "id": id,
                "first_name": first_name,
                "last_name": last_name,
                "email": email,
                "username": username
            }

            return result;
        } catch (e) {
            if (e.code === 'ER_DUP_ENTRY' && e.sqlMessage.includes('username')) {
                throw Boom.conflict('Username already exists');
            } else if (e.code === 'ER_DUP_ENTRY' && e.sqlMessage.includes('email')) {
                throw Boom.conflict('Email already exists');
            } else {
                console.log(e)
                throw Boom.badImplementation('Error creating user');
            }
        }

    }
}
