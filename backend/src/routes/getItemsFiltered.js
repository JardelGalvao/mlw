import { db } from '../database'
import Boom from '@hapi/boom';

export const getItemsFilteredRoute = {
    method: 'GET',
    path: '/api/items/category={idCategory}/subCategory={idSubCategory}',
    handler: async(req, h) => {
        try{
            const idCategory = req.params.idCategory;
            const idSubCategory = req.params.idSubCategory;

            const  { results }  = await db.query(
                `SELECT * FROM ITEMS WHERE (CATEGORY_ID = ? OR ? = 0) AND (SUB_CATEGORY_ID = ? OR ? = 0)`,
                [idCategory, idCategory, idSubCategory, idSubCategory ]
            )

            return results;

        }catch(err){
            console.log(err)
            throw  Boom.badImplementation('Error geting Item');
        }
    }
}