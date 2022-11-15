import { useContext, useEffect, useState } from 'react';
import { FiCopy } from 'react-icons/fi';

import CopyButton from '../components/buttons/CopyButton';
import Layout from '../components/layout/Layout'
import CopyLinkFormModal from '../components/modals/Mensajeria/CopyLinkFormModal';
import { appContext } from '../context/AppProvider';
import { authContext } from '../context/AuthProvider';


const Mensajeria = () => {

    const { CopyLinkFormModalIsOpen, handleCopyLinkFormModal } = useContext(appContext);
    const { FirebaseGetClients, FirebaseGetInterests, clientsData, interestData } = useContext(authContext);





    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            SecureToken: ' 2cc2e9a7-d87d-476f-b63e-9effbc2ef975',
            To: 'gamakkero@gmail.com',
            From: "gamakkero@gmail.com",
            Subject: "This is the subject",
            Body: "And this is the body"

        }
        console.log("g")
        try {
            await Email.send(config).then(() => {
                alert("email send")
            })
        } catch (error) {
            
        }
      
    }

    useEffect(() => {
        try {
            FirebaseGetClients();
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <>
            <Layout>
                <section className="dark:bg-[#F0F2F5] bg-[#F0F2F5] w-full relative">
                    <div className="dark:bg-slate-800 bg-slate-800 w-full md:h-96 lg:h-64 py-14">
                        <div className="grid lg:grid-cols-2">
                            <div className='bg-[#334155] dark:bg-[#334155] w-full md:w-[500px] lg:w-full mx-auto  px-5 py-10 '>
                                <form onSubmit={handleSubmit}>
                                    {/* <div className='grid grid-cols-2 gap-5 mb-2'>
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
                                            <select className='w-full p-2 rounded-sm text-sm'>
                                                {interestData.map(item => <option key={item.PK_TSON_T_InterestDocument} value={item.TSON_T_Interest}>{item.TSON_T_Interest}</option>)}
                                            </select>
                                        </div>
                                    </div> */}
                                    <div className='mb-2'>
                                        <input type="email" placeholder='Buscar' className='p-2 rounded-sm text-sm w-full' />
                                    </div>
                                    <div className='dark:bg-white bg-white h-72 w-full overflow-auto '>
                                        <div>
                                            {clientsData.map(item => <div key={item.PK_TSON_T_ClientDocument} className='grid grid-cols-12 gap-2 w-full  text-sm border-b dark:border-slate-700 border-slate-700  p-2 '>
                                                <input type="checkbox" className='col-span-1 cursor-pointer' />
                                                <p className='border-l dark:border-slate-700 border-slate-700 px-1 col-span-5 overflow-hidden'>{item.TSON_T_ClientEmail}</p>
                                                <p className='border-l border-r dark:border-slate-700 border-slate-700 px-1 col-span-5 overflow-hidden'> {item.TSON_T_ClientName + " " + item.TSON_T_ClientLastname}</p>
                                                <CopyButton link={item.TSON_T_ClientEmail} />
                                            </div>)}
                                        </div>
                                    </div>
                                </form>
                            </div>



                            {/* segunda  */}

                            <div className='bg-[#334155] dark:bg-[#334155] md:w-[500px] lg:w-full mx-auto  px-5 py-10 '>
                                <form onSubmit={handleSubmit}>
                                    <div className='mb-2'>
                                        <input type="email" name='email' placeholder='Ingresa el correo electronico' className='p-2 rounded-sm text-sm w-full' />
                                    </div>
                                    <input type="text" placeholder='Asunto' name='subject' className='w-full p-2 rounded-sm text-sm mb-5' />
                                    <textarea type="text" placeholder='' name='message' className='w-full p-2 rounded-sm text-sm mb-5 h-56' />
                                    <div className='grid grid-cols-3 gap-5'>
                                        <button
                                            className='bg-white rounded-lg py-2 text-sm text-slate-800 font-bold dark:text-slate-800'
                                        >
                                            Adjuntar archivo
                                        </button>
                                        <button
                                            onClick={handleCopyLinkFormModal}
                                            className='bg-white dark:bg-white rounded-lg py-2 text-sm text-slate-800 font-bold dark:text-slate-800'
                                        >
                                            Enlace formulario
                                        </button>

                                        <button
                                            type='submit'
                                            className='bg-green-700 dark:bg-green-700 rounded-lg py-2 text-sm text-white dark:text-white font-bold'
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