// import { combineReducers } from "redux";
// // import { userReducer } from "./user/user.reducer";
// import { userReducer } from "./user/user.reducer";

// export const rootReducer = combineReducers({
//     user: userReducer,
// });

import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
});