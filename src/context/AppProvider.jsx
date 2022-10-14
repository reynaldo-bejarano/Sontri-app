import { createContext, useState } from 'react'

export const appContext = createContext();

const AppProvider = ({ children }) => {

    // register
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false)
    // recoverPassword
    const [recoverPasswordModalIsOpen, setRecoverPasswordModalIsOpen] = useState(false)
    const [EmailForRecoverPassword, setEmailForRecoverPassword] = useState("")
    const [changePasswordModalIsOpen, setChangePasswordModalIsOpen] = useState(false)



    const handleRegisterModal = () =>
        setRegisterModalIsOpen(!registerModalIsOpen)

    const handleRecoverPasswordModal = () =>
        setRecoverPasswordModalIsOpen(!recoverPasswordModalIsOpen)

    const handleSetEmailForRecoverPassword = (email) =>
        setEmailForRecoverPassword(email)

    const handleChangePasswordModalIsOpen = () =>
        setChangePasswordModalIsOpen(!changePasswordModalIsOpen)


    return (
        <appContext.Provider value={{ handleRegisterModal, registerModalIsOpen, handleRecoverPasswordModal, handleChangePasswordModalIsOpen, recoverPasswordModalIsOpen, EmailForRecoverPassword, handleSetEmailForRecoverPassword, changePasswordModalIsOpen }}>
            {children}
        </appContext.Provider>
    )
}

export default AppProvider