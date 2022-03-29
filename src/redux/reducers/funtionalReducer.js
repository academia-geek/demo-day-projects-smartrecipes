import { funtionalTypes } from "../types/types"

const initialState = {
  city: '',
  path: '',
  ciudades: []
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
        case funtionalTypes.setCiudades:
            return {
                ...state,
                ciudades: action.payload,
            }
            
        default:
            return state
    }
}