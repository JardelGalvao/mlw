import { db } from "../database";
import { Boom } from "@hapi/boom";

export const createSubCategoryRoute = {
    method: 'POST',
    path: '/api/sub-categories',
    handler: async(req, h) => {
        try{
            const { name = '', description = '', category_id} = req.payload;
            const userId = '0f454874-a47e-466a-abdf-8b13f4f71b95'
            db.query(
            `
                INSERT INTO SUB_CATEGORIES (NAME, USER_ID, DESCRIPTION, CATEGORY_ID)
                    VALUES (?, ?, ?, ?)
            `,
            [name, userId,  description, category_id]
        );
        return {"message" : "Sucess"}
        }catch(e){
            throw Boom.badImplementation('Error creating Sub Category');
        }
    }
}