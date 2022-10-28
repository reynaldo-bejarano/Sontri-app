import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { authContext } from './AuthProvider';

const AuthRequired = ({ children }) => {

    const { userAuthState } = useContext(authContext);

    if (userAuthState === null) {
        return <Navigate to="/login" />
    }

    return (
        <div>{children}</div>
    )
}

export default AuthRequired