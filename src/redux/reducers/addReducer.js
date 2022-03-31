import { addTypes } from "../types/types"

const initialState = {
  productos : {},
  recetas: {},
  productosCiudad: {},
  productosBusqueda: {}
}

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case addTypes.addProductos:
            return {
                ...state,
                productos: action.payload
            }
        case  addTypes.addRecetas:
            return {
                ...state,
                recetas: action.payload
            }
        case  addTypes.addProductosCiudad:
            return {
                ...state,
                productosCiudad: {
                    ciudad: action.payload.ciudad,
                    productos: action.payload.productos,
                    uid: action.payload.uid
                }
            }
        case addTypes.search:
            return {
                ...state,
                productosBusqueda: action.payload
            }
        case addTypes.reset:
            return {
                ...state,
                productosBusqueda: {}
            }
        default:
            return state
    }
}