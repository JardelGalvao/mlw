import { db } from '../database'
import Boom from '@hapi/boom';

export const getItemsFilteredRoute = {
    method: 'GET',
    path: '/api/items/category={idCategory}/subCategory={idSubCategory}/startDate={startDate}/endDate={endDate}',
    handler: async(req, h) => {
        try{
            const idCategory = req.params.idCategory;
            const idSubCategory = req.params.idSubCategory;
            const startDate = req.params.startDate;
            const endDate = req.params.endDate;

            if(startDate != '0'){
                console.log('KKKKKKKKKKKKK')
                console.log(startDate)
                console.log(endDate)
                const  { results }  = await db.query(
                    `SELECT * FROM ITEMS WHERE (CATEGORY_ID = ? OR ? = 0) AND (SUB_CATEGORY_ID = ? OR ? = 0) AND CREATION_DATE >= ? and CREATION_DATE <= ?`,
                    [idCategory, idCategory, idSubCategory, idSubCategory, startDate, endDate]
                );
                return results;
            }else{
                console.log('KKKKKKKasfasfasfasfK')
                console.log(typeof startDate)
                const  { results }  = await db.query(
                    `SELECT * FROM ITEMS WHERE (CATEGORY_ID = ? OR ? = 0) AND (SUB_CATEGORY_ID = ? OR ? = 0)`,
                    [idCategory, idCategory, idSubCategory, idSubCategory]
                );
                return results;
            }

        }catch(err){
            console.log(err)
            throw  Boom.badImplementation('Error geting Item');
        }
    }
}