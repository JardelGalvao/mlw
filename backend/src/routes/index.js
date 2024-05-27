import { getAllItemsRoute } from "./getAllItems";
import { getAllCategoriesRoute } from "./getAllCategories";
import { getAllSubCategoriesRoute } from "./getAllSubCategories";
import { createUserRoute } from "./createUser";
import { loginRoute } from "./login";
import { createCategoryRoute } from "./createCetegory";
import { deleteCategoryRoute } from "./deleteCategory"; 

export default [
    getAllItemsRoute,
    getAllCategoriesRoute,
    getAllSubCategoriesRoute,
    createUserRoute,
    loginRoute,
    createCategoryRoute,
    deleteCategoryRoute,
];