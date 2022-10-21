import React from 'react'
import { NavLink } from 'react-router-dom'

const FixedNavbar = () => {
    return (
        <nav aria-label="alternative nav ">
            <div className="dark:bg-slate-800 dark:lg:bg-white  h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-[225px] 2xl:w-80 content-center ">
                <div className="md:mt-12 md:w-[225px] md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                    <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left overflow-auto bg-slate-800 lg:bg-white">
                        <li className="mr-3 flex-1">
                            <NavLink
                                to="/"
                                className="block pb-1 py-1 md:py-3 pl-1 align-middle text-white lg:text-slate-800 no-underline hover:text-[#2BB4BE] border-b-2 lg:border-none font-bold  w-full ml-3 text-xs md:text-sm"
                            >
                                INICIO

                            </NavLink>

                        </li>
                        <li className="mr-3 flex-1">
                            <NavLink
                                to="/mensajeria"
                                className="block pb-1 py-1 md:py-3 pl-1 align-middle text-white lg:text-slate-800 no-underline hover:text-[#2BB4BE] border-b-2 lg:border-none font-bold  w-full ml-3 active text-xs md:text-sm"
                            >
                                MENSAJERIA

                            </NavLink>
                        </li>
                        <li className="mr-3 flex-1">
                            <NavLink
                                to="/formularios"
                                className="block pb-1 py-1 md:py-3 pl-1 align-middle text-white lg:text-slate-800 no-underline hover:text-[#2BB4BE] border-b-2 lg:border-none font-bold  w-full ml-3 active text-xs md:text-sm"
                            >
                                FORMULARIO

                            </NavLink>
                        </li>
                        <li className="mr-3 flex-1">
                            <NavLink
                                to="/basedatos"
                                className="block pb-1 py-1 md:py-3 pl-1 align-middle text-white lg:text-slate-800 no-underline hover:text-[#2BB4BE] border-b-2 lg:border-none font-bold  w-full ml-3 active text-xs md:text-sm"
                            >
                                DATABASE

                            </NavLink>
                        </li>
                        {/* <li className="mr-3 flex-1">
                            <NavLink
                                to="/cuenta"
                                className="block pb-1 py-1 md:py-3 pl-1 align-middle text-white lg:text-slate-800 no-underline hover:text-[#2BB4BE] border-b-2 lg:border-none font-bold  w-full ml-3 active text-xs md:text-sm"
                            >
                                MICUENTA

                            </NavLink>
                        </li>
                        <li className="mr-3 flex-1">
                            <NavLink
                                to="/configuracion"
                                className="block pb-1 py-1 md:py-3 pl-1 align-middle text-white lg:text-slate-800 no-underline hover:text-[#2BB4BE] border-b-2 lg:border-none font-bold  w-full ml-3 active text-xs md:text-sm"
                            >
                                CONFIGURACIÓN

                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default FixedNavbar