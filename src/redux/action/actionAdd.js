import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  FieldPath,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { addTypes } from "../types/types";

export const actionAdd = (data) => {
  return {
    type: addTypes.addProductos,
    payload: data,
  };
};

export const actionAddCiudad = (ciudad, uid, data) => {
  return {
    type: addTypes.addProductosCiudad,
    payload: {
      ciudad,
      uid,
      productos: data,
    },
  };
};
// Search
export const searchAsync = (uid, producto) => {
  console.log("producto on search Async", producto);
  return async (dispatch) => {
    // const traerCollection = collection(db, "dataprecios").id('3utTuDXQpab1uPaHM9g1');
    
    const traerCollection = await collection(db, "merqueo/bogota/Precios");
    // search on docSnap data

    const q = await query(
      traerCollection,
      where(documentId(), "<=", producto, ">=", producto, "+", "z")
    );
    const datos = await getDocs(q);
    console.log("datos", datos);
    const productos = [];
    datos.forEach((docu) => {
      console.log("docu.data()", docu.data());

      return productos.push({
        id: docu.id,
        data: docu.data(),
      });
    });
   
    
  };
};

export const searchSync = (productos) => {
  return {
    type: addTypes.search,
    payload: productos,
  };
};
