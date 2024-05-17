import { db } from '../database'

export const getAllSubCategoriesRoute = {
    method: 'GET',
    path: '/api/{userId}/{categorieId}/sub-categories',
    handler: async (req, h) => {
        const userId = req.params.userId;
        const categorieId = req.params.categorieId;
        const { results } = await db.query(
            `SELECT * FROM SUB_CATEGORIES WHERE user_id = ? and categorie_id = ?`
            ,[userId, categorieId]
        )
        return results
    }
}