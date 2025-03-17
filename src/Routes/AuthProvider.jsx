import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // observe user
    const [user, setUser] = useState(null);
    //set loading 
    const [load, setLoad] = useState(true);
    // setting fake data
    const [fakeData, setFakeData] = useState();
    // creating user with email and password 
    const createUser = (email, password) => {
        setLoad(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    // GOOGLE LOGIN 
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoad(true);
        return signInWithPopup(auth, googleProvider);
    };
    // login with github
    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        setLoad(true);
        return signInWithPopup(auth, githubProvider);
    }
    // sign in user with email and password
    const signInUser = (email, password) => {
        setLoad(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    // log out
    const logOut = () => {
        setLoad(true);
        return signOut(auth);
    }
    // data.json
    useEffect(() => {
        fetch("/commercial.json")
            .then(res => res.json())
            .then(fake => setFakeData(fake));
    }, []);

    // observe the user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoad(false);
        });
        return () => {
            unsubscribe();
        }
    });
    //all context value
    const authInfo = { user, createUser, googleLogin, githubLogin, signInUser, logOut, load, fakeData };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export default AuthProvider;