import { db } from '../database';
import Boom from '@hapi/boom';

export const createCategoryRoute = {
    method: 'POST',
    path: '/api/categories',
    handler: async (req, h) => {
        try {
            // const userId = req.params.userId;
            const userId = '0f454874-a47e-466a-abdf-8b13f4f71b95'
            const { name = '', description = ''} = req.payload;
            db.query(
                `
                INSERT INTO CATEGORIES (user_id, name, description ) VALUES (?, ?, ?)
                `
                ,[userId, name, description]
            );
            return { userId, name, description};
        }catch (e) {
            throw Boom.badImplementation('Error creating category');
        }
    }
}
