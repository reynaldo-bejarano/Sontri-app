import { createContext, useState } from 'react'

export const appContext = createContext();

const AppProvider = ({ children }) => {

    //User
    const [userModalIsOpen, setUserModalIsOpen] = useState(false)
    // register
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false)
    // recoverPassword
    const [recoverPasswordModalIsOpen, setRecoverPasswordModalIsOpen] = useState(false)
    const [EmailForRecoverPassword, setEmailForRecoverPassword] = useState("")
    const [changePasswordModalIsOpen, setChangePasswordModalIsOpen] = useState(false)
    //Formulario
    const [AddFormModalIsOpen, setAddFormModalIsOpen] = useState(false);
    const [DetailsFormModalIsOpen, setDetailsFormModalIsOpen] = useState(false);
    //Mensajeria
    const [CopyLinkFormModalIsOpen, setCopyLinkFormModalIsOpen] = useState(false);
    //BaseDatos
    const [AddClientModalOpenIsOpen, setAddClientModalOpenIsOpen] = useState(false);
    const [UpdateClientModalOpenIsOpen, setUpdateClientModalOpenIsOpen] = useState(false);
    const [DetailsClientModalOpenIsOpen, setDetailsClientModalOpenIsOpen] = useState(false);
    //Interes
    const [AddInteresModalOpenIsOpen, setAddInteresModalOpenIsOpen] = useState(false);


    ////User
    const handleUserModalOpen = () => {
        setUserModalIsOpen(!userModalIsOpen);
    }
    //Interes
    const handleAddInteresModalOpen = () => {
        setAddInteresModalOpenIsOpen(!AddInteresModalOpenIsOpen);
    }
    //BaseDatos
    const handleDetailsClientModalOpen = () => {
        setDetailsClientModalOpenIsOpen(!DetailsClientModalOpenIsOpen);
    }

    const handleUpdateClientModalOpen = () => {
        setUpdateClientModalOpenIsOpen(!UpdateClientModalOpenIsOpen);
    }

    const handleAddClientModalOpen = () => {
        setAddClientModalOpenIsOpen(!AddClientModalOpenIsOpen);
    }
    //Mensajeria
    const handleCopyLinkFormModal = () => {
        setCopyLinkFormModalIsOpen(!CopyLinkFormModalIsOpen);
    }
    //Formulario
    const handleAddFormModalOpen = () => {
        setAddFormModalIsOpen(!AddFormModalIsOpen);
    }
    const handleDetailsFormModalOpen = () => {
        setDetailsFormModalIsOpen(!DetailsFormModalIsOpen);
    }
    // register
    const handleRegisterModal = () =>
        setRegisterModalIsOpen(!registerModalIsOpen)

    const handleRecoverPasswordModal = () =>
        setRecoverPasswordModalIsOpen(!recoverPasswordModalIsOpen)

    const handleSetEmailForRecoverPassword = (email) =>
        setEmailForRecoverPassword(email)

    const handleChangePasswordModalIsOpen = () =>
        setChangePasswordModalIsOpen(!changePasswordModalIsOpen)


    return (
        <appContext.Provider value={{ handleRegisterModal, registerModalIsOpen, handleRecoverPasswordModal, handleChangePasswordModalIsOpen, recoverPasswordModalIsOpen, EmailForRecoverPassword, handleSetEmailForRecoverPassword, changePasswordModalIsOpen, AddFormModalIsOpen, handleAddFormModalOpen, DetailsFormModalIsOpen, handleDetailsFormModalOpen, CopyLinkFormModalIsOpen, handleCopyLinkFormModal, AddClientModalOpenIsOpen, handleAddClientModalOpen, UpdateClientModalOpenIsOpen, handleUpdateClientModalOpen, DetailsClientModalOpenIsOpen, handleDetailsClientModalOpen, AddInteresModalOpenIsOpen, handleAddInteresModalOpen, userModalIsOpen, handleUserModalOpen }}>
            {children}
        </appContext.Provider>
    )
}

export default AppProvider