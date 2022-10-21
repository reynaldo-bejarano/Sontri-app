import React from 'react'
import Layout from '../components/layout/Layout'

const MiCuenta = () => {
    return (
        <>
            <Layout>
                <section className="bg-[#F0F2F5] w-full relative">
                    <div className="bg-slate-800 w-full  md:h-96 lg:h-64 py-14">
                        <div className="">
                            <div className="lg:px-16 px-2 lg:w-[800px] mx-auto">
                                <div className='dark:bg-white px-2 p-5'>
                                    <p className='text-3xl px-5 uppercase font-bold dark:text-slate-800'>Mi Cuenta</p>
                                </div>
                                <div className=' md:flex justify-between p-2 bg-gray-700'>
                                    <div className='px-5 w-full mb-5 md:mb-0'>
                                        <div className='mb-5 text-slate-800'>
                                            <p className='py-1 mb-1 dark:bg-white dark:text-gray-600 px-2 rounded-lg'>Nicole</p>
                                            <p className='py-1 mb-1 dark:bg-white dark:text-gray-600 px-2 rounded-lg'>Retana Porras</p>
                                            <p className='py-1 mb-1 dark:bg-white dark:text-gray-600 px-2 rounded-lg'>nicole.retana@uhispano.ac.cr</p>
                                            <p className='py-1 mb-1 dark:bg-white dark:text-gray-600 px-2 rounded-lg'>Sontri</p>
                                        </div>

                                        <div className='grid gap-1'>
                                            <button className='dark:bg-[#F97316] py-1 rounded-lg'>Actualizar contraseña</button>
                                            <button className='dark:bg-red-800 dark:text-white py-1 rounded-lg'>Cambiar correo electrónico</button>
                                        </div>
                                    </div>
                                    <div className='px-5'>
                                        <div
                                            className='w-full md:w-[200px]  h-[200px] mx-auto dark:bg-white mb-2 rounded-lg'
                                        >

                                        </div>
                                        <button className='dark:bg-teal-700 dark:text-white w-full py-1 rounded-lg'
                                        >Cambiar logo</button>

                                    </div>

                                </div>
                            </div >
                        </div>

                    </div>

                  
                </section>
            </Layout>
        </>
    )
}

export default MiCuenta