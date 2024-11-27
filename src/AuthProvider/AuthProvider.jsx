import { Children, createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext()
const auth = getAuth(app)

//social media provider
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
const AuthProvider = ({children}) => {

const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)

const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}


    const signIn = (email,password)=>{
setLoading(true)
return signInWithEmailAndPassword(auth,email,password)
    }
    const LogOut = (email,password)=>{
        setLoading(true)
        return signOut(auth,email,password);
    }

      //google login
  const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

  //github login
  const gitHubLogin =()=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  }

useEffect(()=>{
const unsubscribe = onAuthStateChanged(auth,currentUser => {
    setUser(currentUser)
    setLoading(false)
});
return ()=> unsubscribe()
},[])



const authInfo ={
    user,
    loading,
    LogOut,
    createUser,
    signIn,
    googleLogin,
    gitHubLogin
        }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}

            </AuthContext.Provider>
    );
};

export default AuthProvider;