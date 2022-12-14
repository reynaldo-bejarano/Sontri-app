
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Layout from '../components/layout/Layout'
import AddInteres from '../components/modals/Interes/AddInteres';
import { appContext } from '../context/AppProvider';
import { authContext } from '../context/AuthProvider';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Configuracion = () => {
    const { handleAddInteresModalOpen, AddInteresModalOpenIsOpen, } = useContext(appContext);
    const { FirebaseGetInterests, interestData } = useContext(authContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true)
            FirebaseGetInterests()
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }, [interestData])

    if (loading === true) {
        return <div > </div>
    }


    return (
        <>
            <Layout>
                <section className="bg-[#F0F2F5] dark:bg-[#F0F2F5] w-full relative">
                    <div className="bg-slate-800 dark:bg-slate-800 w-full md:h-96 lg:h-64 py-14">
                        <div className="w-full">
                            <div className="lg:px-16 px-2">
                                <div >
                                    <div className='flex gap-5 mb-5'>
                                        <button
                                            onClick={handleAddInteresModalOpen}
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
                                    {interestData.map(item =>
                                        <div key={item.PK_TSON_T_InterestDocument} className="dark:bg-[#334155] bg-[#334155] p-5 rounded-lg mb-4 gap-2 md:flex justify-between items-center ">
                                            <div className='grid gap-1 mb-5 md:mb-0'>
                                                <p className="dark:text-white text-white text-sm font-bold capitalize">{item.TSON_T_Interest}</p>
                                            </div>
                                         
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                    {AddInteresModalOpenIsOpen && <AddInteres />}
                    <ToastContainer />

                </section>
            </Layout>
        </>
    )
}

export default Configuracion