import { Link } from "react-router-dom"
import hero from "../assets/logo.png"

const Register = () => {
  return (
    <div>
      <div className="h-screen w-screen bg-[#f0f2f5]">
        <div className="container mx-auto lg:py-20  ">
          <div className="grid lg:grid-cols-5 md:gap-20">
            <div className="lg:col-span-3 bg-[#f0f2f5]">
              <div>
                <img src={hero} alt="logo hero" className="lg:m-0 md:w-72 2xl:w-96 mx-auto " />
                <p className="text-center lg:text-left text-slate-700 text-3xl 2xl:text-6xl border-green-800 mb-10 md:pr-20">Te ayuda a comunicarte y estar más cerca de las personas que hacen grande tu empresa.</p>
              </div>
            </div>

            <div className="lg:col-span-2 md:w-[70%] lg:w-full md:mx-auto bg-[#f0f2f5]">
              <div className="p-10 bg-white shadow-lg rounded-lg">
                <form className="grid justify-center">
                  <input type="text" placeholder="Nombre" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />
                  <input type="text" placeholder="Apellidos" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />
                  <input type="text" placeholder="Ingresa tu correo electrónico" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />
                  <input type="password" placeholder="Ingresa tu contraseña" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-3" />

                  <button
                    type="submit"
                    className="w-96 py-1 2xl:px-20 2xl:py-4 2xl:text-2xl bg-red-800 text-white rounded-md border-red-800 border-4 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-red-800 font-bold shadow-lg mb-5"
                  >
                    Crear cuenta
                  </button>
                </form>


      

                <div className="w-96 bg-gray-300 h-[1px]"></div>

                <div className="flex justify-center p-5">
                  <Link to="/register" className="">
                    <button className="w-96 py-1 2xl:px-20 2xl:py-4 2xl:text-2xl bg-green-800 text-white rounded-md border-4 border-green-800 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-green-800 font-bold shadow-lg">Iniciar sesión</button>
                  </Link>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Register