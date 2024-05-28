import { db } from "../database";
import { Boom } from "@hapi/boom";

export const deleteSubCategoryRoute = {
    method: 'DELETE',
    path: '/api/sub-categories/{id}',
    handler: async(req, h) => {
        try{
            const subCategoryId = req.params.id;
            await db.query(
                `DELETE FROM SUB_CATEGORIES WHERE id = ? `
                ,[subCategoryId]
            )

            const result = {
                "message" : "success!"
            }
            return result
        }catch(e){
            console.log(e)
            throw Boom.badImplementation('Error deleting Sub Categegory');
        }
    }
}