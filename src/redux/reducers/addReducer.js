import { addTypes } from "../types/types"

const initialState = {
  productos : {
      merqueo : {},
      jumbo: {}
  },
  activeLook: 'merqueo',
  recetas: {},
  productosCiudad: {},
  productosBusqueda: {},
}

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case addTypes.addProductos:
            return {
                ...state,
                productos:{
                    ...state.productos,
                    [action.payload.provedor]: action.payload.productos
                }
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
        case addTypes.activeLook:
            return {
                ...state,
                activeLook: action.payload
            }
            
        default:
            return state
    }
}