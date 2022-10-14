
import { useContext } from "react";
import logoImage from "../assets/logo.png"
import ButtonRecoverPasswordModal from "../components/buttons/Login/ButtonRecoverPasswordModal";
import ButtonRegisterModal from "../components/buttons/Login/ButtonRegisterModal";
import LoginForm from "../components/forms/Login/LoginForm";
import ChangePasswordModal from "../components/modals/Login/ChangePasswordModal";
import RecoverPasswordModal from "../components/modals/Login/RecoverPasswordModal";
import RegisterModal from "../components/modals/Login/RegisterModal";
import { appContext } from "../context/AppProvider";


const Login = () => {

    const { handleRegisterModal, registerModalIsOpen, handleRecoverPasswordModal, changePasswordModalIsOpen, recoverPasswordModalIsOpen } = useContext(appContext);

    return (
        <div className="h-screen w-screen bg-[#f0f2f5] relative">
            <div className="container mx-auto lg:p-20 2xl:px-10 2xl:py-56">
                <div className="grid lg:grid-cols-5 md:gap-20">
                    <div className="lg:col-span-3 bg-[#f0f2f5]">
                        <div>
                            <img src={logoImage} alt="logo" className="md:w-72 2xl:w-96 mx-auto lg:m-0 " />
                            <p className="text-center lg:text-left text-slate-700 text-2xl 2xl:text-4xl border-green-800 mb-10 md:pr-20">Te ayuda a comunicarte y estar más cerca de las personas que hacen grande tu empresa.</p>
                        </div>
                    </div>


                    <div className="lg:col-span-2 md:w-[70%] lg:w-full md:mx-auto bg-[#f0f2f5]">
                        <div className="p-10 bg-white shadow-lg rounded-lg ">
                            <LoginForm />

                            <div className="flex justify-center mb-2">
                                <ButtonRecoverPasswordModal onClick={handleRecoverPasswordModal} />
                            </div>

                            <div className="w-full bg-gray-300 h-[1px]"></div>

                            <div className="flex justify-center py-5">
                                <ButtonRegisterModal onClick={handleRegisterModal} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals */}
            {registerModalIsOpen && <RegisterModal />}
            {recoverPasswordModalIsOpen && <RecoverPasswordModal />}
            {changePasswordModalIsOpen && <ChangePasswordModal />}


        </div>

    )
}

export default Login