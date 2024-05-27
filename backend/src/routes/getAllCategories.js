import { db } from '../database'

export const getAllCategoriesRoute = {
    method: 'GET',
    path: '/api/categories',
    handler: async (req, h) => {
        const { results } = await db.query(
            `SELECT * FROM CATEGORIES`,
        )
        return results
    }
}