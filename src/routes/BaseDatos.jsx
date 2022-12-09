import Layout from '../components/layout/Layout'
import AddClientModal from '../components/modals/BaseDatos/AddClientModal';
import { useContext, useState } from 'react';
import { appContext } from '../context/AppProvider';
import UpdateClientModal from '../components/modals/BaseDatos/UpdateClientModal';
import DetailsClientModal from '../components/modals/BaseDatos/DetailsClientModal';
import { useEffect } from 'react';
import { authContext } from '../context/AuthProvider';
import CopyButton from '../components/buttons/CopyButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BaseDatos = () => {

    const { AddClientModalOpenIsOpen, handleAddClientModalOpen, UpdateClientModalOpenIsOpen, handleUpdateClientModalOpen, handleDetailsClientModalOpen, DetailsClientModalOpenIsOpen } = useContext(appContext);
    const { FirebaseGetClients, clientsData } = useContext(authContext);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        try {
            setLoading(true);
            FirebaseGetClients();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [clientsData])




    return (
        <>
            <Layout>
                <section className="dark:bg-[#F0F2F5] bg-[#F0F2F5] w-full relative">
                    <div className="dark:bg-slate-800 bg-slate-800 w-full md:h-96 lg:h-64 py-14">
                        <div className="w-full">
                            <div className="lg:px-16 px-2">
                                <div >
                                    <div className='flex gap-5 mb-5'>
                                        <button
                                            onClick={handleAddClientModalOpen}
                                            className='dark:bg-green-700 bg-green-700 rounded-lg py-2 px-10 text-sm text-white dark:text-white font-bold'
                                        >
                                            Agregar
                                        </button>

                                    </div>
                                    <div className='mb-5'>
                                        <input type="email" placeholder='Buscar' className='p-2 rounded-sm text-sm w-full' />
                                    </div>
                                </div>

                                <div>
                                    {clientsData.map(item =>
                                        <div
                                            key={item.PK_TSON_T_ClientDocument}
                                            className="dark:bg-[#334155] bg-[#334155] p-5 rounded-lg mb-4 gap-2 md:flex justify-between "
                                        >
                                            <div className='grid gap-1 mb-5 md:mb-0'>
                                                <p className="dark:text-white text-white text-sm  font-bold capitalize">
                                                    {item.TSON_T_ClientName + " " + item.TSON_T_ClientLastname}
                                                </p>
                                                <div className='flex items-center gap-5'>
                                                    <p className="dark:text-white text-white text-sm  font-bold">
                                                        {item.TSON_T_ClientEmail}
                                                    </p>

                                                    <CopyButton link={item.TSON_T_ClientEmail} title="Correo electrónico copiado" color="text-white" />
                                                    
                                                </div>
                                                <p className="dark:text-white text-white text-sm  font-bold">
                                                    {new Date(item.TSON_D_ClientRegisterDate.seconds * 1000).toISOString().slice(0, 19).replace('T', ' ')}
                                                </p>
                                            </div>
                                            <div className="grid gap-2  ">
                                                <button
                                                    onClick={() => handleUpdateClientModalOpen(item.PK_TSON_T_ClientDocument)}
                                                    className='dark:bg-white bg-white  rounded-lg py-1 px-10 text-sm dark:text-slate-800 text-slate-800 font-bold'
                                                >
                                                    Actualizar
                                                </button>
                                                <button
                                                    onClick={() => handleDetailsClientModalOpen(item.PK_TSON_T_ClientDocument)}
                                                    className='dark:bg-[#e9ff78] bg-[#e9ff78]  rounded-lg py-1 px-10 text-sm dark:text-slate-800 text-slate-800 font-bold'
                                                >
                                                    Detalles
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {AddClientModalOpenIsOpen && <AddClientModal />}
                    {UpdateClientModalOpenIsOpen && <UpdateClientModal />}
                    {DetailsClientModalOpenIsOpen && <DetailsClientModal />}


                    <ToastContainer />

                </section>
            </Layout>
        </>
    )
}

export default BaseDatos