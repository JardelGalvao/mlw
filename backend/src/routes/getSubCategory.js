import { db } from '../database';
import { Boom } from '@hapi/boom';

export const getSubCategoryRoute = {
    method: 'GET',
    path: '/api/sub-categories/{id}',
    handler: async (req, h) => {
        try {
            const id = req.params.id;
            const result = await db.query(
                `SELECT * FROM SUB_CATEGORIES WHERE ID = ?`,
                [id]
            );
            return result.results[0];
        } catch (e) {
            throw Boom.badImplementation('Error getting sub category');
        }
    }
};