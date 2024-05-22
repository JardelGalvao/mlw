import { db } from '../database'

export const loginRoute = {
    method: 'POST',
    path: '/api/login',
    handler: async (req, h) => {
        const userId = req.params.userId;
        const { results } = await db.query(
            `SELECT * FROM CATEGORIES WHERE user_id = ?`
            ,[userId]
        )
        return results
    }
}