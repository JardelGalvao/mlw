import { db } from '../database';
import Boom from '@hapi/boom';

export const deleteCategoryRoute = {
    method: 'DELETE',
    path: '/api/categories/{id}',
    handler: async (req, h) => {
        try {
            const categoryId = req.params.id;
            await db.query(
                `DELETE FROM CATEGORIES WHERE id = ? `
                ,[categoryId]
            )

            const result = {
                "message" : "success!"
            }
            return result
        }
        catch(e){
            console.log(e)
            throw Boom.badImplementation('Error deleting categegory');
        }
    }
}