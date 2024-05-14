import { db } from '../database'

export const getAllItemsRoute = {
    method: 'GET',
    path: '/items',
    handler: async (req, h) => {
        const { results } = await db.query(
            `SELECT * FROM ITEMS`
        )

        return results
    }
}