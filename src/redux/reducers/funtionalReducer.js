import { funtionalTypes } from "../types/types"

const initialState = {
  city: '',
  path: '',
  ciudades: [],
  currentWatchableObject: {
    id: '',
    data:{}
  },
  currentWatchableRecipe: {
    id: '',
    label: '',
    ingredientLines: [],
    porciones: '',
    time: '',
    cautions: [],
    healthLabels: []
    
  }
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
        case funtionalTypes.currentWatchableRecipe: {
            return {
                ...state,
                currentWatchableRecipe : {
                    id: action.payload.id,
                    label: action.payload.label,
                    ingredientLines: action.payload.ingredientLines,
                    porciones: action.payload.porciones,
                    time: action.payload.time,
                    cautions: action.payload.cautions,
                    healthLabels: action.payload.healthLabels
                }
        }
    }
        case funtionalTypes.closeSide:
            return { 
                ...state,
                currentWatchableObject : {
                    id: '',
                    data:{}
                },
            }


        default:
            return state
    }
}