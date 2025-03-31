import { createContext, useState, useEffect } from "react";
import { auth } from '../Firebase'; // Import Firebase auth
import firebase from 'firebase/compat/app';

const AuthContext = createContext({
    isLoggedIn: false,
    userEmail: "", // Add userEmail to the context
    onLogout: () => {},
    onLogin: (email, password) => {},
    onSignup: (email, password) => {}
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userEmail, setUserEmail] = useState(""); // State to store user email

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedIn(true);
                setUserEmail(user.email); // Store the email in context
                localStorage.setItem('isLoggedIn', '1');
                localStorage.setItem('userEmail', user.email); // Optionally store in localStorage
            } else {
                setIsLoggedIn(false);
                setUserEmail(""); // Clear email when logged out
                localStorage.removeItem('isLoggedIn');
                localStorage.removeItem('userEmail');
            }
        });

        return () => unsubscribe(); // Cleanup on component unmount
    }, []);

    const loginHandler = async (email, password) => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setIsLoggedIn(true);
            setUserEmail(email); // Set email in context after login
            localStorage.setItem('isLoggedIn', '1');
            localStorage.setItem('userEmail', email); // Optionally store in localStorage
        } catch (error) {
            console.error("Login error: ", error.message);
        }
    };

    const signupHandler = async (email, password) => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            setIsLoggedIn(true);
            setUserEmail(email); // Set email in context after signup
            localStorage.setItem('isLoggedIn', '1');
            localStorage.setItem('userEmail', email); // Optionally store in localStorage
        } catch (error) {
            console.error("Signup error: ", error.message);
        }
    };

    const logoutHandler = async () => {
        try {
            await auth.signOut();
            setIsLoggedIn(false);
            setUserEmail("");
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('userEmail');
        } catch (error) {
            console.error("Logout error: ", error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, userEmail, onLogout: logoutHandler, onLogin: loginHandler, onSignup: signupHandler }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;