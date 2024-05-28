import { db } from '../database'
import Boom from '@hapi/boom';

export const getCategoryRoute = {
    method: 'GET',
    path: '/api/categories/{id}',
    handler: async (req, h) => {
        try {
            const id = req.paramms.id;
            const { results } = await db.query(
                `SELECT * FROM CATEGORIES WHERE ID = ?`,
                [id]
            )
            
            return results
        }
        catch(e){
            throw Boom.badImplementation('Error geting sub category');
        }

    }
}