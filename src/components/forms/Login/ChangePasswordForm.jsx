
const ChangePasswordForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <p className="text-md 2xl:text-md py-5 text-center text-slate-600">Revisa tu correo electrónico e ingresa el código de verificación que te hemos enviado.</p>
            <input type="password" placeholder="Contraseña nueva" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-2 text-slate-600" />
            <input type="password" placeholder="Repetir contraseña nueva" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-2 text-slate-600" />
            <input type="text" placeholder="Código de confirmación" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-5 text-slate-600" />
            <button
                type="submit"
                className="w-full py-1 2xl:px-20 2xl:py-1 2xl:text-lg bg-blue-900 text-white rounded-md border-blue-900 border-4 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-blue-900 font-bold shadow-lg mb-5"
            >
                Cambiar contraseña
            </button>
        </form>
    )
}

export default ChangePasswordForm