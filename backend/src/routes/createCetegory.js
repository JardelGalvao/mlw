import { db } from '../database';
import Boom from '@hapi/boom';

export const createCategoryRoute = {
    method: 'POST',
    path: '/api/categories',
    handler: async (req, h) => {
        try {
            const userId = req.params.userId;
            const { name = '', description = ''} = req.payload;
            db.query(
                `
                INSERT INTO CATEGORIES (user_id, name, description ) VALUES (?, ?, ?)
                `
                ,[1, name, description]
            );
            return { userId, name, description};
        }catch (e) {
            console.log(e)
                throw Boom.badImplementation('Error creating category');
        }
    }
}
