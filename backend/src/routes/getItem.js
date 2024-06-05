import { db } from "../database";
import { Boom } from "@hapi/boom";

export const getItemRoute = {
    method: 'GET',
    path: '/api/items/{id}',
    handler: async (req, h) => {
        try{
            const id = req.params.id;
            const  result = await db.query(
                `SELECT * FROM ITEMS WHERE ID = ?`
                ,[id]
            );
            return result.results[0]
        }catch(err){
            throw  Boom.badImplementation('Error geting Item');
        }
    }
}