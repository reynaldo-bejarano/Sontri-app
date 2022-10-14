import { useContext, useState } from "react";
import { appContext } from "../../../context/AppProvider";


const RecoverPasswordForm = () => {

    const { EmailForRecoverPassword, handleRecoverPasswordModal,handleChangePasswordModalIsOpen, handleSetEmailForRecoverPassword } = useContext(appContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRecoverPasswordModal();
        handleChangePasswordModalIsOpen();
    }

    const handleOnChange = (e) => {
        handleSetEmailForRecoverPassword(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p className="text-md 2xl:text-md py-5 text-center text-slate-600">Ingresa tu correo electrónico para recibir tu código de verificación y cambiar tu contraseña</p>
            <input
                type="email"
                onChange={handleOnChange}
                value={EmailForRecoverPassword}
                placeholder="Correo electrónico"
                className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-10"
            />
            <button
                type="submit"
                className="w-full py-1 2xl:px-20 2xl:py-4 2xl:text-2xl bg-blue-900 text-white rounded-md border-blue-900 border-4 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-blue-900 font-bold shadow-lg mb-5"
            >
                Enviar correo electrónico
            </button>
        </form>
    )
}

export default RecoverPasswordForm