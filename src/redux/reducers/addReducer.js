const initialState = {
  productos : {},
  recetas: {}
}

export const addReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addProductos':
            return {
                ...state,
                productos: action.payload
            }
        case 'addRecetas':
            return {
                ...state,
                recetas: action.payload
            }
        default:
            return state
    }
}