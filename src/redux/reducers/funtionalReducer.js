import { funtionalTypes } from "../types/types"

const initialState = {
  city: '',
  path: ''
}

export const funtionalReducer = (state = initialState, action) => {
    switch (action.type) {
        case funtionalTypes.setCity:
            return {
                ...state,
               city: action.payload,                
            }
        case funtionalTypes.setPath:
            return {
                ...state,
                path: action.payload,
            }
        default:
            return state
    }
}