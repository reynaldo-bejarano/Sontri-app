
const RegisterForm = () => {
    return (
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
    )
}

export default RegisterForm