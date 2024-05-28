import { db } from "../database";
import { Boom } from "@hapi/boom";

export const createSubCategoryRoute = {
    method: 'POST',
    path: '/api/sub-categories',
    handler: async(req, h) => {
        try{
            const { name = '', description = '', category_id} = req.payload;
            console.log(req.payload)
            db.query(
            `
                INSERT INTO SUB_CATEGORIES (NAME, USER_ID, DESCRIPTION, CATEGORY_ID)
                    VALUES (?, ?, ?, ?)
            `,
            [name, 1,  description, category_id]
        );

        return {"message" : "Sucess"}

        }catch(e){
            throw Boom.badImplementation('Error creating Sub Category');
        }
    }
}