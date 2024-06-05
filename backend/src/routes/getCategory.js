import { db } from '../database'
import Boom from '@hapi/boom';

export const getCategoryRoute = {
    method: 'GET',
    path: '/api/categories/{id}',
    handler: async (req, h) => {
        try{
            const id = req.params.id;
            const  result = await db.query(
                `SELECT * FROM CATEGORIES WHERE ID = ?`,
                [id]
            )
            return result.results[0];  
        }
        catch(e){
            throw Boom.badImplementation('Error geting category');
        }

    }
}