import { Link } from "react-router-dom"
import hero from "../assets/logo.png"
import { AiFillCloseCircle } from 'react-icons/ai';
import { useState } from "react";


const Login = () => {
    const [registerModalIsOpen, setRegisterModalIsOpen] = useState(false)


    const handleRegisterModal = () => {
        setRegisterModalIsOpen(!registerModalIsOpen)
    }

    return (

        <div className="h-screen w-screen bg-[#f0f2f5] relative">
            <div className="container mx-auto lg:p-20 2xl:px-10 2xl:py-56">
                <div className="grid lg:grid-cols-5 md:gap-20">
                    <div className="lg:col-span-3 bg-[#f0f2f5]">
                        <div>
                            <img src={hero} alt="logo hero" className="md:w-72 2xl:w-96 mx-auto lg:m-0 " />
                            <p className="text-center lg:text-left text-slate-700 text-2xl 2xl:text-4xl border-green-800 mb-10 md:pr-20">Te ayuda a comunicarte y estar más cerca de las personas que hacen grande tu empresa.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-2 md:w-[70%] lg:w-full md:mx-auto bg-[#f0f2f5]">
                        <div className="p-10 bg-white shadow-lg rounded-lg ">
                            <form >
                                <input type="text" placeholder="Ingresa tu correo electrónico" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />
                                <input type="password" placeholder="Ingresa tu contraseña" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />

                                <button
                                    type="submit"
                                    className="w-full py-1 2xl:px-20 2xl:py-4 2xl:text-2xl bg-green-800 text-white rounded-md border-green-800 border-4 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-green-800 font-bold shadow-lg mb-5"
                                >
                                    Iniciar sesión
                                </button>
                            </form>


                            <div className="flex justify-center mb-2">
                                <Link to="/login" className="text-blue-700" >
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>

                            <div className="w-full bg-gray-300 h-[1px]"></div>

                            <div className="flex justify-center py-5">
                                <button
                                    onClick={handleRegisterModal}
                                    className="w-full py-1 2xl:px-20 2xl:py-4 2xl:text-2xl bg-red-800 text-white rounded-md border-4 border-red-800 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-red-800 font-bold shadow-lg"
                                >
                                    Crear cuenta
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* modal */}

            {registerModalIsOpen &&
                <div className="lg:col-span-2 w-full md:w-[500px] 2xl:w-[700px] md:mx-auto bg-[#f0f2f5] 
             absolute top-1/4 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
                    <div className="p-5 md:px-10 2xl:p-10 bg-white shadow-lg rounded-lg">
                        <div className="flex justify-end mb-5">
                            <button onClick={handleRegisterModal}>
                                <AiFillCloseCircle className="text-2xl 2xl:text-4xl text-slate-700" />
                            </button>
                        </div>

                        <form>
                            <input type="text" placeholder="Nombre" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />
                            <input type="text" placeholder="Apellido" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />
                            <input type="text" placeholder="Empresa" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />
                            <input type="email" placeholder="Correo electrónico" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />
                            <input type="email" placeholder="Confirmar correo electrónico" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />
                            <input type="password" placeholder="Contraseña" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />

                            <p className="text-[10px] 2xl:text-sm py-5">Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>

                            <button
                                type="submit"
                                className="w-full py-1 2xl:px-20 2xl:py-4 2xl:text-2xl bg-blue-900 text-white rounded-md border-blue-900 border-4 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-blue-900 font-bold shadow-lg mb-5"
                            >
                                Registrarse
                            </button>
                        </form>
                        <div className="w-full bg-gray-300 h-[1px] mx-auto"></div>
                    </div>
                </div>
            }

        </div>

    )
}

export default Login