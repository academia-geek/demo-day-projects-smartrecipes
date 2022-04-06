import { types } from "../types/types";
const initialState = {
    isAuth: false,
    user: {
        displayName: "",
        email: "",
        photoUrl: "",
        uid: "",
        alergia:[],
        checked:'',
    },
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.login:
            return {
                isAuth: true,
                user: action.payload,
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
        default:
            return state;
    }
}