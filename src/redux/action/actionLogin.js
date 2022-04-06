import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { facebook, google, db } from "../../firebase/firebaseConfig";


import {
  addDoc,
  collection,
 
} from "@firebase/firestore";

import { registerUserSync } from "./actionRegister";
import { types } from "../types/types";
import { useNavigate } from "react-router-dom";

export const login = (email, password) => {

  // const navigate = useNavigate()
  return (dispatch) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
        console.log(user)
        console.log("Bienvenid@");
        // navigate('/home')
      })
      .catch((e) => {
        console.log("El usuario no existe");
      });
  };
};
// export const logoutAsincrono = () =>{
//
//     return (dispatch) =>{
//
//        const auth = getAuth();
//
//         signInWithEmailAndPassword(auth,email,password)
//        .then(({user}) =>{
//              dispatch(
//                 loginSincrono(user.uid,user.displayName)
//              )
//              console.log('Bienvenid@');
//        })
//        .catch(e =>{
//             console.log('El usuario no existe');
//        })
//     }
// }

export const loginGoogle = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        // console.log('user', user)
        const { uid, displayName, photoURL, email } = user;
        dispatch(loginSincrono(displayName, email, uid, photoURL));
        console.log(`Bienvenid@ ${user.displayName}`);
        const newUser = {
          displayName: user.displayName,
          email: user.email,
          photoUrl: photoURL,
          uid: user.uid,
        };
        addDoc(collection(db, "users"), newUser)
          .then((resp) => {
            dispatch(
              registerUserSync(user.displayName, user.email, user.uid, photoURL)
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
export const loginFacebook = () => {
  return (dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, facebook)
      .then(({ user }) => {
        const { uid, displayName, photoURL, email } = user;
        dispatch(loginSincrono(displayName, email, uid, photoURL));
        console.log(`Bienvenid@ ${user.displayName}`);
        const newUser = {
          displayName: user.displayName,
          email: user.email,
          photoUrl: photoURL,
          uid: user.uid,
        };
        addDoc(collection(db, "users"), newUser)
          .then((resp) => {
            dispatch(
              registerUserSync(user.displayName, user.email, user.uid, photoURL)
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

export const loginSincrono = (displayName, email, uid, photoURL) => {
  return {
    type: types.login,
    payload: {
      displayName,
      email,
      uid,
      photoURL,
    },
  };
};

export const logoutSincrono = () => {
  return {
    type: types.logout,
  };
};

