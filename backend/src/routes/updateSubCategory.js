import { db } from "../database";
import { Boom } from "@hapi/boom";

export const updateSubCategoryRouter = {
    method: 'POST',
    path: '/api/sub-categories/{id}',
    handler: async (req, h) => {
        try{
            const id = req.params.id;
            const {name, description, category_id} = req.payload;
            await db.query(
                `UPDATE SUB_CATEGORIES SET name = ?, description = ?, category_id = ?
                WHERE ID = ?`,
                [name, description, category_id, id]
            );
    
            const { results } = await db.query(
                'SELECT * FROM SUB_CATEGORIES WHERE id=?',
                [id],
            );
            return results;
        }catch(e){
            throw Boom.badImprementation('Error updating Sub Category!')
        }

    }
}