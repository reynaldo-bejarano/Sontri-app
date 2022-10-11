import React from 'react'

const LoginForm = () => {
    return (
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
    )
}

export default LoginForm