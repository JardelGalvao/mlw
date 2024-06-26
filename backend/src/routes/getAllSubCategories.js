import { db } from '../database'
import Boom from '@hapi/boom';

export const getAllSubCategoriesRoute = {
    method: 'GET',
    path: '/api/sub-categories',
    handler: async (req, h) => {
        try {
            const { results } = await db.query(
                `SELECT * FROM SUB_CATEGORIES`
            )
            return results
        }
        catch(e){
            throw Boom.badImplementation('Error geting sub category');
        }

    }
}