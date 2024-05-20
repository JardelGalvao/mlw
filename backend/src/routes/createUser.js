import { db } from '../database'
import { v4 as uuid } from 'uuid';

export const createUserRoute = {
    method: 'POST',
    path: '/api/users',
    handler: async (req, h) => {
        try {
            const id = uuid();
            const {first_name = '', last_name = '', email = '' , username = '', password = '' } = req.payload;
            await db.query(
                `INSERT INTO USERS
                    VALUES (?, ?, ?, ?, ?, ?)`
                ,[id, first_name, last_name, email, username, password]
            );
    
            const result = {
                "id" : id,
                "first_name" : first_name,
                "last_name" : last_name,
                "email" : email,
                "username" : username
            }
            
            return result
        }
        catch(e){
            throw new Boom(e);
        }

    }
}