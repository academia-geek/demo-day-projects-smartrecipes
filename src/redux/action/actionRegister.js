import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { types } from "../types/types";




export const registroEmailPasswordNombre = (values) => {
  const {name, email, repeatPassword , photo, alergia, checked   } = values  
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, repeatPassword)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });
        dispatch(registerSincrono(user.email, user.uid, user.displayName)
        
        );
        // dispatch(registerUserAsync(name,email,user.uid,img))
        const newUser = {
          name: user.displayName,
          email: user.email,
          photoUrl: photo,
          uid: user.uid,
          alergia,
          checked
        };
        addDoc(collection(db, "usuarios"), newUser)
          .then((resp) => {
            console.log("Agregado");
            // dispatch(
            //   registerUserSync(user.displayName, user.email, user.uid, photo)
            // );
          })
          .catch((error) => {
            console.log(error);
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
