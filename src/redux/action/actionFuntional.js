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

export const actionFunctionalCurrentWatchableObject = (currentWatchableObject) => {
  const { id, data } = currentWatchableObject
  return {
    type: funtionalTypes.currentWatchableObject,
    payload: {
      id,
      data
    },
  }
}
export const actionFunctionalCloseSide = () => {
  return {
    type: funtionalTypes.closeSide,
  }
}

export const actionFunctionalCurrentWatchableRecipe = (currentWatchableRecipe) => {
  console.log('currentWatchableRecipe', currentWatchableRecipe)

  return {
    type: funtionalTypes.currentWatchableRecipe,
    payload: currentWatchableRecipe,
  }
}