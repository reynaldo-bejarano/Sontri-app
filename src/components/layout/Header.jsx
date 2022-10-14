import logo from "../../assets/logo.png"


const Header = () => {
  return (
    <header>
    <nav
        aria-label="menu nav"
        className="dark:bg-slate-800 mt-0 h-auto fixed w-full z-20 top-0"
    >

        <div className="flex justify-between items-center lg:grid lg:grid-cols-12">
            <div className="flex flex-shrink md:w-1/3 lg:w-full  text-slate-800 lg:col-span-2 lg:bg-white">
                <a href="#" aria-label="Home">
                    <img src={logo} alt="logo" className="w-[100px] ml-5" />
                </a>
            </div>
            <div className="hidden md:flex flex-1 md:w-full justify-left md:justify-start  px-2 lg:col-span-2">
                <h1 className="text-white font-bold uppercase pl-5">Dashboard</h1>
            </div>
            <div className="flex content-center justify-between md:w-1/3 lg:w-full md:justify-end lg:col-span-8">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                    <li className="flex-1 md:flex-none md:mr-3">
                        <div className="relative inline-block">
                            <button
                                className="drop-button text-white py-2 px-2 flex items-center gap-2"
                            >
                                Usuario
                                <svg
                                    className="h-3 fill-current inline"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </button>
                            <div
                                id="myDropdown"
                                className="dropdownlist absolute bg-gray-800 text-slate-800 right-0 mt-3 p-3 overflow-auto z-30 w-[150px] invisible"
                            >

                                <a
                                    href="#"
                                    className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                                >
                                    <i className="fa fa-user fa-fw" /> Mi cuenta
                                </a>
                                <a
                                    href="#"
                                    className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                                >
                                    <i className="fa fa-cog fa-fw" /> Configuración
                                </a>
                                <div className="border border-gray-800" />
                                <a
                                    href="#"
                                    className="p-2 hover:bg-gray-800 text-white text-sm no-underline hover:no-underline block"
                                >
                                    <i className="fas fa-sign-out-alt fa-fw" /> Salir
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
  )
}

export default Header