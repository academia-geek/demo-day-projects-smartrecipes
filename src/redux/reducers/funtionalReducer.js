import { funtionalTypes } from "../types/types"

const initialState = {
  city: '',
  path: '',
  ciudades: [],
  currentWatchableObject: {
    id: '',
    data:{}
  },
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
        case funtionalTypes.currentWatchableObject:
            return {
                ...state,
                currentWatchableObject : {
                    id: action.payload.id,
                    data: action.payload.data
                },                
            }
                       
        default:
            return state
    }
}