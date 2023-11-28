import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { useEffect } from 'react';

export const AuthContext = createContext(null);
export const auth = getAuth(app)

const AuthPorvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        loading(true)
        createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        loading(true)
        signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        loading(true)
         signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('Current User', currentUser);
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn, 
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPorvider;