import React from 'react'

const FixedNavbar = () => {
    return (
        <nav aria-label="alternative nav ">
            <div className="dark:bg-slate-800 dark:lg:bg-white shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-[225px] 2xl:w-80 content-center ">
                <div className="md:mt-12 md:w-[225px] md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                    <ul className="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left overflow-auto bg-slate-800 lg:bg-white">
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 lg:border-none "
                            >
                                <span className="pb-1 md:pb-0 text-xs md:text-sm text-white  lg:text-slate-800  block md:inline-block font-bold hover:text-[#2BB4BE] md:ml-3">
                                    DASHBOARD
                                </span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 lg:border-none"
                            >
                                <span className="pb-1 md:pb-0 text-xs md:text-sm text-white  lg:text-slate-800 block md:inline-block font-bold hover:text-[#2BB4BE] md:ml-3">
                                    MENSAJERIA
                                </span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 lg:border-none"
                            >
                                <span className="pb-1 md:pb-0 text-xs md:text-sm text-white  lg:text-slate-800 block md:inline-block font-bold hover:text-[#2BB4BE] md:ml-3">
                                    FORMULARIOS
                                </span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 lg:border-none"
                            >
                                <span className="pb-1 md:pb-0 text-xs md:text-sm text-white  lg:text-slate-800 block md:inline-block font-bold hover:text-[#2BB4BE] md:ml-3">
                                    BASEDATOS
                                </span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 lg:border-none"
                            >
                                <span className="pb-1 md:pb-0 text-xs md:text-sm text-white  lg:text-slate-800 block md:inline-block font-bold hover:text-[#2BB4BE] md:ml-3">
                                    MICUENTA
                                </span>
                            </a>
                        </li>
                        <li className="mr-3 flex-1">
                            <a
                                href="#"
                                className="block py-1 md:py-3 pl-0 md:pl-1 align-middle text-white no-underline hover:text-white border-b-2 lg:border-none"
                            >
                                <span className="pb-1 md:pb-0 text-xs md:text-sm text-white  lg:text-slate-800 block md:inline-block font-bold hover:text-[#2BB4BE] md:ml-3">
                                    CONFIGURACIÓN
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default FixedNavbar