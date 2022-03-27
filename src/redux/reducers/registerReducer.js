import { types } from "../types/types";


export const registerReducer = (state = {}, action) => {
    switch (action.type) {
        case types.register:
            
            return {
                email: action.payload.email,
                uid: action.payload.uid,
                displayName: action.payload.name,
                img: action.payload.img
            }
    
        default:
            return state;
    }
}