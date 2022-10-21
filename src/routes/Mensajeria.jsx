import { useContext } from 'react';
import { FiCopy } from 'react-icons/fi';
import Layout from '../components/layout/Layout'
import CopyLinkFormModal from '../components/modals/Mensajeria/CopyLinkFormModal';
import { appContext } from '../context/AppProvider';


const Mensajeria = () => {

    const { CopyLinkFormModalIsOpen, handleCopyLinkFormModal } = useContext(appContext);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <Layout>
                <section className="dark:bg-[#F0F2F5] w-full relative">
                    <div className="dark:bg-slate-800 w-full md:h-96 lg:h-64 py-14">
                        <div className="w-full grid lg:grid-cols-2 gap-5">
                            <div className='dark:bg-[#334155] md:w-[500px] mx-auto px-5 py-10 '>
                                <form onSubmit={handleSubmit}>
                                    <div className='grid grid-cols-2 gap-5 mb-2'>
                                        <div >
                                            <select name="cars" id="cars" className='w-full p-2 rounded-sm text-sm'>
                                                <option value="0">Sin rango de edad</option>
                                                <option value="18">18 - 30</option>
                                                <option value="31">31 - 40</option>
                                                <option value="41">41 - 50</option>
                                                <option value="51">51 +</option>
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
                                    <div className='dark:bg-white h-60 w-full overflow-auto '>
                                        <div>

                                            <div className='grid grid-cols-12 gap-2 w-full  text-sm border-b dark:border-slate-700 hover:bg-[#ed796c] p-2 '>
                                                <input type="checkbox" className='col-span-1' />
                                                <p className='border-l dark:border-slate-700 px-1 col-span-5 overflow-hidden'>nicole.retana@uhispano.ac.cr</p>
                                                <p className='border-l border-r dark:border-slate-700 px-1 col-span-5 overflow-hidden'>Nicole Retana Porras</p>
                                                <button className='col-span-1 mx-auto'>
                                                    <FiCopy />
                                                </button>
                                            </div>
                                            <div className='grid grid-cols-12 gap-2 w-full  text-sm border-b dark:border-slate-700 hover:bg-[#ed796c] p-2 '>
                                                <input type="checkbox" className='col-span-1' />
                                                <p className='border-l dark:border-slate-700 px-1 col-span-5'>andrea.mora@uhispano.ac.cr</p>
                                                <p className='border-l border-r dark:border-slate-700 px-1 col-span-5'>Andrea Mora Morales</p>
                                                <button className='col-span-1 mx-auto'>
                                                    <FiCopy />
                                                </button>
                                            </div>
                                            <div className='grid grid-cols-12 gap-2 w-full  text-sm border-b dark:border-slate-700 hover:bg-[#ed796c] p-2 '>
                                                <input type="checkbox" className='col-span-1' />
                                                <p className='border-l dark:border-slate-700 px-1 col-span-5 overflow-hidden'>wilmer.abarca@uhispano.ac.cr</p>
                                                <p className='border-l border-r dark:border-slate-700 px-1 col-span-5 overflow-hidden'>Wilmer Howard Abarca</p>
                                                <button className='col-span-1 mx-auto'>
                                                    <FiCopy />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>



                            {/* segunda  */}

                            <div className='bg-[#334155] md:w-[500px] mx-auto  px-5 py-10 '>
                                <form onSubmit={handleSubmit}>

                                    <div className='mb-2'>
                                        <input type="email" placeholder='Ingresa el correo electronico' className='p-2 rounded-sm text-sm w-full' />

                                    </div>

                                    <input type="text" placeholder='Asunto' className='w-full p-2 rounded-sm text-sm mb-5' />


                                    <textarea type="text" placeholder='' className='w-full p-2 rounded-sm text-sm mb-5 h-56' />
                                    <div className='grid grid-cols-3 gap-5'>
                                        <button
                                            className='bg-[#F97316] rounded-lg py-2 text-sm text-white font-bold'
                                        >
                                            Adjuntar archivo
                                        </button>
                                        <button
                                            onClick={handleCopyLinkFormModal}
                                            className='bg-[#EC4899] rounded-lg py-2 text-sm text-white font-bold'
                                        >
                                            Enlace formulario
                                        </button>

                                        <button
                                            type='submit'
                                            className='bg-green-700 rounded-lg py-2 text-sm text-white font-bold'
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>



                    </div>

                    {/* modal */}
                    {CopyLinkFormModalIsOpen && <CopyLinkFormModal />}


                </section>
            </Layout>
        </>
    )
}

export default Mensajeria