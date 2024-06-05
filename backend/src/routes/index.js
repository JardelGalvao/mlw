import { getAllItemsRoute } from "./getAllItems";
import { getAllCategoriesRoute } from "./getAllCategories";
import { getAllSubCategoriesRoute } from "./getAllSubCategories";
import { createUserRoute } from "./createUser";
import { loginRoute } from "./login";
import { createCategoryRoute } from "./createCetegory";
import { deleteCategoryRoute } from "./deleteCategory"; 
import { getCategoryRoute } from "./getCategory";
import { createSubCategoryRoute } from "./createSubCategory";
import { deleteSubCategoryRoute } from "./deleteSubCategory";
import { getSubCategoryRoute } from "./getSubCategory"; 
import { updateSubCategoryRoute } from "./updateSubCategory";
import { updateCategoryRoute } from "./updateCategory";
import { createItemRoute } from "./createItem";
import { deleteItemRoute } from "./deleteItem";
import { getItemRoute } from "./getItem";

export default [
    getAllItemsRoute,
    getAllCategoriesRoute,
    getAllSubCategoriesRoute,
    createUserRoute,
    loginRoute,
    createCategoryRoute,
    deleteCategoryRoute,
    getCategoryRoute,
    createSubCategoryRoute,
    deleteSubCategoryRoute,
    getSubCategoryRoute,
    updateSubCategoryRoute,
    updateCategoryRoute,
    createItemRoute,
    deleteItemRoute,
    getItemRoute
];