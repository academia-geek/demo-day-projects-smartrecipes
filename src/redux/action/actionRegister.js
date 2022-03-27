import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { types } from "../types/types";




export const registroEmailPasswordNombre = (email, password, name, img) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });

        dispatch(registerSincrono(user.email, user.uid, user.displayName));
        // dispatch(registerUserAsync(name,email,user.uid,img))
        const newUser = {
          displayName: user.displayName,
          email: user.email,
          photoUrl: img,
          uid: user.uid,
        };
        addDoc(collection(db, "users"), newUser)
          .then((resp) => {
            dispatch(
              registerUserSync(user.displayName, user.email, user.uid, img)
            );
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

export const registerUserSync = (nombre, email, uid, img) => {
  return {
    type: registerLocalTypes.registerLocal,
    payload: { nombre, email, uid, img },
  };
};
