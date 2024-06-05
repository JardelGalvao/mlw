import { db } from '../database'
import Boom from '@hapi/boom';

export const updateCategoryRoute = {
    method: 'POST',
    path: '/api/categories/{id}',
    handler: async (req, h) => {
        try {
            const id= req.params.id;
            const {name, description} = req.payload;
            await db.query(
                `
                    UPDATE CATEGORIES SET name = ?, description = ?
                    WHERE id = ? 
                `, [name, description, id]
            );
            
            const  { results }   = await db.query(
                'SELECT * FROM CATEGORIES WHERE id = ?',
                [id],
            );
    
            return results

        }catch(e){
            throw Boom.badImplementation('Error updating Category!')
        }
    }
}