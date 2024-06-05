import { db } from "../database";
import Boom from '@hapi/boom';

export const deleteItemRoute = {
    method: 'DELETE',
    path: '/api/items/{id}',
    handler: async (req, h) => {
        try {
            const id = req.params.id;
            await db.query(
                `DELETE FROM ITEMS WHERE ID = ?
                `,[id]
            )
            const result = {
                "message" : "success!"
            }
        return result
        }
        catch(err){
            Boom.badImplementation('Error deletind item')
        }
    }
}