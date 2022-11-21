import {CATEGORIES_ACTION_TYPES, Category} from "./category.type";
import { createAction, Action, ActionwithPayload,withMatcher } from "../../utils/reducer/reducer.utils";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionwithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;
export type FetchCategoriesFailure = ActionwithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, Error>;
export type CategoryAction = FetchCategoriesStart | FetchCategoriesSuccess | FetchCategoriesFailure;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
})
export const fetchCategoriesSuccess = withMatcher((categoriesArray:Category[]): FetchCategoriesSuccess => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
})
export const fetchCategoriesFailure =withMatcher( (errorMessage:Error) => {
    return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, errorMessage);
})
