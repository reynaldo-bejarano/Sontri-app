import { FiCopy } from 'react-icons/fi';
import Layout from '../components/layout/Layout'

const Configuracion = () => {
    return (
        <>
            <Layout>
                <section className="bg-[#F0F2F5] w-full relative">
                    <div className="bg-slate-800 w-full md:h-96 lg:h-64 py-14">
                        <div className="w-full">
                            <div className="lg:px-16 px-2">
                                <div >
                                    <div className='flex gap-5 mb-5'>
                                        <button
                                            className='dark:bg-green-700 rounded-lg py-2 px-10 text-sm text-white font-bold'
                                        >
                                            Agregar
                                        </button>

                                    </div>
                                    <div className='mb-5'>
                                        <input type="email" placeholder='Buscar' className='p-2 rounded-sm text-sm w-full' />
                                    </div>
                                </div>

                                <div>
                                    {/* ciclo map */}
                                    <div className="dark:bg-[#334155] p-5 rounded-lg mb-4 gap-2 md:flex justify-between items-center ">
                                        <div className='grid gap-1 mb-5 md:mb-0'>
                                            <p className="dark:text-white text-sm font-bold capitalize">Legos</p>
                                        </div>
                                        <div className="flex items-center gap-2  ">
                                            <button
                                                className='dark:bg-[#F97316]  rounded-lg py-1 px-10 text-sm dark:text-slate-800 font-bold'
                                            >
                                                Actualizar
                                            </button>
                                            <button
                                                className='dark:bg-red-700  rounded-lg py-1 px-10 text-sm dark:text-white font-bold'
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>

                                    {/* ciclo map */}
                                    <div className="dark:bg-[#334155] p-5 rounded-lg mb-4 gap-2 md:flex justify-between items-center ">
                                        <div className='grid gap-1 mb-5 md:mb-0'>
                                            <p className="dark:text-white text-sm font-bold capitalize">Legos</p>
                                        </div>
                                        <div className="flex items-center gap-2  ">
                                            <button
                                                className='dark:bg-[#F97316] rounded-lg py-1 px-10 text-sm dark:text-slate-800 font-bold'
                                            >
                                                Actualizar
                                            </button>
                                            <button
                                                className='dark:bg-red-700  rounded-lg py-1 px-10 text-sm dark:text-white font-bold'
                                            >
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>

                                    {/* ciclo map */}
                                    <div className="dark:bg-[#334155] p-5 rounded-lg mb-4 gap-2 md:flex justify-between items-center ">
                                        <div className='grid gap-1 mb-5 md:mb-0'>
                                            <p className="dark:text-white text-sm font-bold capitalize">Legos</p>
                                        </div>
                                        <div className="flex items-center gap-2  ">
                                            <button
                                                className='dark:bg-[#F97316]  rounded-lg py-1 px-10 text-sm dark:text-slate-800 font-bold'
                                            >
                                                Actualizar
                                            </button>
                                            <button
                                                className='dark:bg-red-700  rounded-lg py-1 px-10 text-sm dark:text-white font-bold'
                                            >
                                                Eliminar
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

export default Configuracion