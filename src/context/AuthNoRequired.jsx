import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from './AuthProvider';

const AuthNoRequired = ({ children }) => {
    const { userAuthState } = useContext(authContext);
    
    if (userAuthState !== null) {
        return <Navigate to="/" />
    }
    return (
        <div>{children}</div>
    )
}

export default AuthNoRequired