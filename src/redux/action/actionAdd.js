import {
  collection,
  getDocs,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { addTypes } from "../types/types";

export const actionAdd = (data, provedor) => {
  return {
    type: addTypes.addProductos,
    payload: {
      provedor: provedor,
      productos: data,
    },
  };
};

export const changeActiveView = (activeLook) => {
  return {
    type: addTypes.activeLook,
    payload: activeLook,
  }}


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
export const searchAsync = (producto, path, activeLook) => {  
  return async (dispatch) => {
    if(activeLook === 'merqueo'){
    const traerCollection = await collection(db, `merqueo/${path}/Precios`);
    console.log('buscando en ', `buscando en merqueo/${path}/Precios`)
    
    const q = await query(
      traerCollection,
      where(documentId(), ">=", producto)
    );
    const datos = await getDocs(q);
    const productos = [];
    datos.forEach((docu) => {
      console.log("docu.data()", docu.data());

      return productos.push({
        id: docu.id,
        data: docu.data(),
      });
    })
    dispatch(searchSync(productos));
  } else {
    const traerCollection = await collection(db, `cornershop/${path}/precios-jumbo`);
    console.log('buscando en ', `buscando en jumbo`)
    const q = await query(
      traerCollection,
      where(documentId(), ">=", producto)
    );
    const datos = await getDocs(q);
    const productos = [];
    datos.forEach((docu) => {
      console.log("docu.data()", docu.data());

      return productos.push({
        id: docu.id,
        data: docu.data(),
      });
    })
    dispatch(searchSync(productos));
  }
  };
};

export const searchSync = (productos) => {
  return {
    type: addTypes.search,
    payload: productos,
  };
};

export const resetSearchSync = () => {
  return {
    type: addTypes.reset,   
  }
}
