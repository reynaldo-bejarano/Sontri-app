import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase.config';

export const authContext = createContext();

const AuthProvider = ({ children }) => {
    const [userAuthState, setUserAuthState] = useState(null)

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUserAuthState(currentUser);
            console.log("Current user=" + currentUser)
        })
    }, [])

    return (
        <authContext.Provider value={{ userAuthState }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider