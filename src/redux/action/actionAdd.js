import { collection, doc, getDoc, getDocs, query, where , FieldPath, documentId } from "firebase/firestore";
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
  return async (dispatch) => {
    // const traerCollection = collection(db, "dataprecios").id('3utTuDXQpab1uPaHM9g1');
    const traerCollection = collection(db,'dataprecios/bogota/preciosLocales')
   // search on docSnap data 
    
   
     const q = query(traerCollection, ref => ref.where('nombre', '==', producto));
     
     const datos = await getDocs(q);
    console.log("datos", datos);
    datos.forEach(element => {
      console.log("element", element.data());
    });
    const productos = [];
    datos.forEach((docu) => {
      productos.push({
        id: docu.id,
        data: docu.data(),
      });
      console.log("docu.data()", docu.data());
    });

    //       const q = query(traerCollection, where('name', '>=', producto, '<',  producto + 'z'))
    //       console.log('q', q)
    //       const datos = await getDocs(q)
    //       console.log('datos', datos)
    //
    //       const productos = []
    //       datos.forEach((docu) => {
    //           productos.push({
    //               id: docu.id,
    //               data:docu.data()
    //           })
    //           console.log('docu.data()', docu.data())
    //       })
    // dispatch(searchSync(productos))
  };
};

export const searchSync = (productos) => {
  return {
    type: addTypes.search,
    payload: productos,
  };
};
