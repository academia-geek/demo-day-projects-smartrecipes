import { funtionalTypes } from "../types/types"

export const actionFunctional = (city) => {
  return {
    type: funtionalTypes.setCity,
    payload: city,
  }
}