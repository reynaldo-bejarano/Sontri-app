import { Link } from "react-router-dom"
import Layout from "../components/layout/Layout"

const Formularios = () => {
    return (
        <>
            <Layout>
                <section className="dark:bg-[#F0F2F5] w-full relative">
                    <div className="dark:bg-slate-800 w-full md:h-96 lg:h-64 py-14">
                        <div className="w-full">
                            <div className="lg:px-16 px-2">
                                <div >
                                    <div className='flex gap-5 mb-5'>
                                        <button
                                            className='dark:bg-green-700 rounded-lg py-2 px-10 text-sm text-white font-bold'
                                        >
                                            Agregar
                                        </button>
                                        <div >
                                            <select name="cars" id="cars" className='w-full p-2 rounded-sm text-sm'>
                                                <option value="0">Sin rango de edad</option>
                                                <option value="18">18 - 30</option>
                                                <option value="31">31 - 40</option>
                                                <option value="41">41 - 50</option>
                                                <option value="51">51 - 60</option>
                                                <option value="61">61 +</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select name="cars" id="cars" className='w-full p-2 rounded-sm text-sm'>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='mb-5'>
                                        <input type="email" placeholder='Buscar' className='p-2 rounded-sm text-sm w-full' />
                                    </div>
                                </div>

                                <div>
                                    {/* ciclo map */}
                                    <div className="dark:bg-[#334155] p-5 rounded-lg mb-4">
                                        <h2 className="dark:text-white mb-3 font-bold">Formulario de navidad - Juguetes legos</h2>
                                        <div className="grid gap-2 md:flex md:gap-5 ">
                                            <a href="#" className='dark:bg-[#F97316] text-center rounded-lg py-1 px-10 text-sm dark:text-white font-bold'
                                            >Formulario</a>
                                            <a href="#" className='dark:bg-[#EC4899] text-center  rounded-lg py-1 px-10 text-sm dark:text-white font-bold'
                                            >Resultados</a>
                                            <button
                                                className='dark:bg-[#e9ff78]  rounded-lg py-1 px-10 text-sm dark:text-slate-800 font-bold'
                                            >
                                                Detalles
                                            </button>
                                        </div>
                                    </div>

                                        {/* ciclo map */}
                                        <div className="dark:bg-[#334155] p-5 rounded-lg mb-4">
                                        <h2 className="dark:text-white mb-3 font-bold">Formulario de navidad - Juguetes legos</h2>
                                        <div className="grid gap-2 md:flex md:gap-5 ">
                                            <a href="#" className='dark:bg-[#F97316] text-center rounded-lg py-1 px-10 text-sm dark:text-white font-bold'
                                            >Formulario</a>
                                            <a href="#" className='dark:bg-[#EC4899] text-center  rounded-lg py-1 px-10 text-sm dark:text-white font-bold'
                                            >Resultados</a>
                                            <button
                                                className='dark:bg-[#e9ff78]  rounded-lg py-1 px-10 text-sm dark:text-slate-800 font-bold'
                                            >
                                                Detalles
                                            </button>
                                        </div>
                                    </div>

                                        {/* ciclo map */}
                                        <div className="dark:bg-[#334155] p-5 rounded-lg mb-4">
                                        <h2 className="dark:text-white mb-3 font-bold">Formulario de navidad - Juguetes legos</h2>
                                        <div className="grid gap-2 md:flex md:gap-5 ">
                                            <a href="#" className='dark:bg-[#F97316] text-center rounded-lg py-1 px-10 text-sm dark:text-white font-bold'
                                            >Formulario</a>
                                            <a href="#" className='dark:bg-[#EC4899] text-center  rounded-lg py-1 px-10 text-sm dark:text-white font-bold'
                                            >Resultados</a>
                                            <button
                                                className='dark:bg-[#e9ff78]  rounded-lg py-1 px-10 text-sm dark:text-slate-800 font-bold'
                                            >
                                                Detalles
                                            </button>
                                        </div>
                                    </div>
                                  
                                   

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}

export default Formularios