import { funtionalTypes } from "../types/types"



export const funtionalReducer = (state = {}, action) => {
    switch (action.type) {
        case funtionalTypes.setCity:
            return {
                ...state,
                city: action.payload
            }
        default:
            return state
    }
}