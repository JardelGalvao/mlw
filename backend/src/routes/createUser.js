import { db } from '../database';
import { v4 as uuid } from 'uuid';
import Boom from '@hapi/boom';

export const createUserRoute = {
    method: 'POST',
    path: '/api/users',
    handler: async (req, h) => {
        try {
            const id = uuid();
            const { first_name = '', last_name = '', email = '', username = '', password = '' } = req.payload;
            
            // Attempt to insert the user into the database
            await db.query(
                `INSERT INTO USERS
                    VALUES (?, ?, ?, ?, ?, ?)`
                , [id, first_name, last_name, email, username, password]
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
            // Check if the error is due to a unique constraint violation
            console.log(e);
            if (e.code === 'ER_DUP_ENTRY' && e.sqlMessage.includes('username')) {
                console.log(e);
                throw Boom.conflict('Username already exists');
            } else if (e.code === 'ER_DUP_ENTRY' && e.sqlMessage.includes('email')) {
                console.log(e);
                throw Boom.conflict('Email already exists');
            } else {
                // If it's another error, throw a generic internal server error
                console.log(e);
                throw Boom.badImplementation('Error creating user');
            }
        }

    }
}
