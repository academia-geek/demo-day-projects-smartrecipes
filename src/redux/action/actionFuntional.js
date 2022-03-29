import { funtionalTypes } from "../types/types"

export const actionFunctional = (city) => {
  return {
    type: funtionalTypes.setCity,
    payload: city,
  }
}

export const actionFunctionalPath = (path) => {
  return {
    type: funtionalTypes.setPath,
    payload: path,
  }
}
export const actionFunctionalCiudades = (ciudades) => {
  return {
    type: funtionalTypes.setCiudades,
    payload: ciudades,
  }
}