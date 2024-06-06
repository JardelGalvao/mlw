import { db } from '../database'
import Boom from '@hapi/boom';

export const updateItemRoute = {
    method: 'POST',
    path: '/api/items/{id}',
    handler: async (req, h) => {
        try{
            const itemId = req.params.id;
            const {name, description, category_id, sub_category_id, estimated_date, update_date, due_date, value} = req.payload;
            await db.query(
                `UPDATE ITEMS SET NAME = ?, DESCRIPTION = ?, CATEGORY_ID = ?, SUB_CATEGORY_ID = ?, ESTIMATED_DATE = ?, UPDATE_DATE = ?, DUE_DATE = ?, VALUE = ?
                 WHERE ID = ?`
                ,[name, description, category_id, sub_category_id, estimated_date, update_date, due_date, value, itemId]
            )

            const  { results }   = await db.query(
                'SELECT * FROM ITEMS WHERE id = ?',
                [itemId],
            );
    
            return results;

        }catch(err){
            console.log(err)
            throw Boom.badImplementation('Error updating item');
        }
    }
}
