import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";ß


export const fetchCategoriesStart = () => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGPRIES_START);


export const fetchCategoriesSuccess = (categoriesArray) => 
createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGPRIES_SUCESS, categoriesArray)

export const fetchCategoriesfailed = (error) => 
createAction (CATEGORIES_ACTION_TYPES.FETCH_CATEGPRIES_FAILED, error);

