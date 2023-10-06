import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Pages/login/Firebase/Firebase.config";

 
export  const AuthContext = createContext(null)

const AuthProvider = ({children}) => { 

    const[user,setUser] = useState()

    const createUser = (email,password) =>{
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            console.log('simple changed user',currentUser);
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {createUser,logIn,user,logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;