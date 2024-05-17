import { db } from '../database'

export const getAllCategoriesRoute = {
    method: 'GET',
    path: '/api/{userId}/categories',
    handler: async (req, h) => {
        const userId = req.params.userId;
        const { results } = await db.query(
            `SELECT * FROM CATEGORIES WHERE user_id = ?`
            ,[userId]
        )
        return results
    }
}