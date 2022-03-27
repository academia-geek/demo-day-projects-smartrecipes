import { addTypes } from "../types/types"

export const actionAdd = (data) => {
  console.log('Action add', data)
    return {
        type: addTypes.addProductos,
        payload: data
    }
}