import { types } from "../types/types";
const initialState = {
    isAuth: false,
    userId: null,
    userData: {},
    favorites: [], 
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...state,
                isAuth: true,
                userId: action.payload,
            };
        case types.logout:
            return {
                isAuth: false,
                user: {}    
            }
        case types.register:
            return {
                isAuth: false,
                user: {},
            } 
        case types.registerUser:
            return {
                isAuth: false,
                user: {},
            }
        case types.addUserData:
            return {
                ...state,
                userData: action.payload
            } 
        case types.addFavorites:
            return{
                ...state,
                favorites: [...state.favorites, action.payload]
               
            }         
        default:
            return state;
    }
}