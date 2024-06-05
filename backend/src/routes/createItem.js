import { db } from "../database";
import { Boom } from "@hapi/boom";

export const createItemRoute = {
    method: 'POST',
    path: '/api/items',
    handler: async(req, h) => {
        const { name = '', description = '', category_id, sub_category_id, creation_date, estimated_date, due_date, update_date, value} = req.payload;
        const userId = '0f454874-a47e-466a-abdf-8b13f4f71b95'
        try{
            await db.query(
                `INSERT INTO ITEMS (USER_ID, NAME, DESCRIPTION, CATEGORY_ID, SUB_CATEGORY_ID,  CREATION_DATE, ESTIMATED_DATE, DUE_DATE, UPDATE_DATE, VALUE) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                [userId, name, description, category_id, sub_category_id, creation_date, estimated_date, due_date, update_date, value]
            );

            return {"message" : "Sucess"}
        }catch(e){
            console.log(e)
            throw Boom.badImplementation('Error creating Item');
        }
    }
}