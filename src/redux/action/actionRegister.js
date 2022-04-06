import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { setDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { types } from "../types/types";




export const registroEmailPasswordNombre = (values) => {
  const {name, email, repeatPassword , photo, alergia, checked   } = values  
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, repeatPassword)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name })      
        
        const newUser = {
          name: user.displayName,
          email: user.email,
          photoUrl: photo,
          uid: user.uid,
          alergia,
          checked
        };
        setDoc(doc(db, "usuarios", user.uid),{...newUser})
          .then((resp) => {
            console.log("Agregado");   
          })
          .catch((error) => {
            console.log('error', error);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

export const registerSincrono = (email, password, name) => {
  return {
    type: types.register,
    payload: {
      email,
      password,
      name,
    },
  };
};

//CREATE

// export const registerUserAsync = (nombre, email, uid, img) => {
//   console.log("entramos");
//   const newUser = {
//     displayName: nombre,
//     email,
//     photoUrl: img,
//     uid,
//   };
//   return (dispatch) => {
//     addDoc(collection(db, "users"), newUser)
//       .then((resp) => {
//         dispatch(registerUserSync(nombre, email, uid, img));
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
// };

export const registerUserSync = (nombre, email, uid, photo) => {
  return {
    type: types.registerUser,
    payload: {  }
  };
};
