import { createContext, useState } from 'react'

export const appContext = createContext();

const AppProvider = ({ children }) => {

    // register
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false)
    // recoverPassword
    const [recoverPasswordModalIsOpen, setRecoverPasswordModalIsOpen] = useState(false)


    const handleRegisterModal = () => {
        setRegisterModalIsOpen(!registerModalIsOpen)
    }
    
    const handleRecoverPasswordModal = () => {
        setRecoverPasswordModalIsOpen(!recoverPasswordModalIsOpen)
    }

    return (
        <appContext.Provider value={{ handleRegisterModal, registerModalIsOpen, handleRecoverPasswordModal, recoverPasswordModalIsOpen }}>
            {children}
        </appContext.Provider>
    )
}

export default AppProvider