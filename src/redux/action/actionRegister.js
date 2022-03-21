import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { types } from "../types/types";

// Register

export const register = (email, password, name) => {
    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then (async({user}) => {
            await updateProfile(auth.currentUser, {displayName: name})

            dispatch(registerSin(user.email,user.uid,user.displayName))
            console.log(user);
        })
        .catch(e => {
            console.log(e);
        })
    }
}

// Resgister syncronic

export const registerSin = (email, password, name) => {
    return {
        type: types.register,
        payload: {
            email,
            password,
            name
        }
    }
}