import { useContext } from "react"
import { NavLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { appContext } from "../../context/AppProvider"
import { authContext } from "../../context/AuthProvider"
import { FirebaseSignOut } from "../../firebase/firebase"


const Header = () => {
    const { userModalIsOpen, handleUserModalOpen } = useContext(appContext);
    const { userAuthState } = useContext(authContext)

    const handleFirebaseSignOut = () => {
        try {
            FirebaseSignOut();
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <header>
            <nav
                aria-label="menu nav"
                className="dark:bg-slate-800 bg-slate-800 mt-0 h-auto fixed w-full z-20 top-0"
            >

                <div className="flex justify-between items-center lg:grid lg:grid-cols-12">
                    <div className="flex flex-shrink md:w-1/3 lg:w-full  text-slate-800 dark:text-slate-800 lg:col-span-2 lg:dark:bg-white lg:bg-white">
                        <NavLink to="/" aria-label="Home">
                            <img src={logo} alt="logo" className="w-[100px] ml-5" />
                        </NavLink>
                    </div>
                    <div className="hidden md:flex flex-1 md:w-full justify-left md:justify-start  px-2 lg:col-span-2">
                        <h1 className="text-white dark:text-white font-bold uppercase pl-5">Dashboard</h1>
                    </div>
                    <div className="flex content-center justify-between md:w-1/3 lg:w-full md:justify-end lg:col-span-8">
                        <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                            <li className="flex-1 md:flex-none md:mr-3">
                                <div className="relative inline-block">
                                    <button
                                        onClick={handleUserModalOpen}
                                        className="drop-button text-white dark:text-white py-2 px-2 flex items-center gap-2"
                                    >
                                        {userAuthState.displayName}
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
                                        className={userModalIsOpen ? "dropdownlist absolute dark:bg-slate-700 dark:text-slate-800 bg-slate-700 text-slate-800 right-0 mt-3 p-3 overflow-auto z-30 w-[150px]" : "hidden"}

                                    >

                                        <NavLink
                                            to="/cuenta"
                                            className="p-2  dark:text-white text-white text-sm no-underline hover:no-underline block"
                                        >
                                            Mi cuenta
                                        </NavLink>
                                        <NavLink
                                            to="/configuracion"
                                            className="p-2  dark:text-white text-white text-sm no-underline hover:no-underline block"
                                        >
                                            Configuración
                                        </NavLink>
                                        <div className="border dark:border-white border-white" />
                                        <button
                                            onClick={handleFirebaseSignOut}
                                            className="p-2  dark:text-white text-white text-sm no-underline hover:no-underline block"
                                        >
                                            Salir
                                        </button>
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