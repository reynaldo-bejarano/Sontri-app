

const ButtonRegisterModal = ({onClick}) => {

  return (
    <button
      onClick={onClick}
      className="w-full py-1 2xl:px-20 2xl:py-1 2xl:text-lg bg-red-800 text-white rounded-md border-4 border-red-800 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-red-800 font-bold shadow-lg"
    >
      Crear cuenta
    </button>
  )
}

export default ButtonRegisterModal