import { useContext, useEffect } from 'react'
import Layout from '../components/layout/Layout'
import ChangeEmailModal from '../components/modals/Cuenta/ChangeEmailModal';
import ChangePasswordModal from '../components/modals/Cuenta/ChangePasswordModal';
import { appContext } from '../context/AppProvider';
import { authContext } from '../context/AuthProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MiCuenta = () => {
    const { handleChangeEmailModalIsOpen, changeEmailModalOpenIsOpen, changePasswordModalIsOpen, handleChangePasswordModalIsOpen } = useContext(appContext);
    const { FirebaseGetUsers, userData } = useContext(authContext);

    useEffect(() => {
        try {
            FirebaseGetUsers();
        } catch (error) {
            console.log(error);
        }
    }, [userData])



    return (
        <>
            <Layout>
                <section className="bg-[#F0F2F5] dark:bg-[#F0F2F5] w-full relative">
                    <div className="bg-slate-800 dark:bg-slate-800 w-full  md:h-96 lg:h-64 py-14">
                        <div className="">
                            <div className="lg:px-16 px-2 lg:w-[800px] mx-auto">
                                <div className='dark:bg-white bg-white px-2 p-5'>
                                    <p className='text-3xl px-5 uppercase font-bold dark:text-slate-800 text-slate-800'>Mi Cuenta</p>
                                </div>
                                {userData && <div className=' md:flex justify-between p-2 bg-gray-700 dark:bg-gray-700'>
                                    <div className='px-5 w-full mb-5 md:mb-0'>
                                        <div className='mb-5 text-slate-800 dark:text-slate-800'>
                                            <p className='py-1 mb-1 h-8 dark:bg-white bg-white  dark:text-gray-600 text-gray-600 px-2 rounded-lg'>{userData.TSON_T_UserName}</p>
                                            <p className='py-1 mb-1 h-8 dark:bg-white  bg-white dark:text-gray-600 text-gray-600 px-2 rounded-lg'>{userData.TSON_T_UserLastname}</p>
                                            <p className='py-1 mb-1 h-8 dark:bg-white bg-white dark:text-gray-600 px-2 text-gray-600 rounded-lg'>{userData.TSON_T_UserEmail}</p>
                                            <p className='py-1 mb-1 h-8 dark:bg-white bg-white dark:text-gray-600 px-2 text-gray-600 rounded-lg'>{userData.TSON_T_UserCompany}</p>
                                        </div>

                                        <div className='grid gap-1'>
                                            <button
                                                onClick={handleChangePasswordModalIsOpen}
                                                className='dark:bg-[#e9ff78] bg-[#e9ff78] py-1 rounded-lg'>Actualizar contrase??a</button>
                                            <button
                                                onClick={handleChangeEmailModalIsOpen}
                                                className='dark:bg-red-800 bg-red-800 dark:text-white py-1 text-white rounded-lg'>Cambiar correo electr??nico</button>
                                        </div>
                                    </div>
                                    <div className='px-5'>
                                        <div
                                            className='w-full md:w-[200px]  h-[200px] mx-auto dark:bg-white mb-2 text-white dark:text-white rounded-lg bg-white'
                                        >

                                        </div>
                                        <button className='dark:bg-teal-700 bg-teal-700 dark:text-white text-white w-full py-1 rounded-lg'
                                        >Cambiar logo</button>

                                    </div>

                                </div>}

                            </div >
                        </div>

                    </div>
                    {changeEmailModalOpenIsOpen && <ChangeEmailModal />}
                    {changePasswordModalIsOpen && <ChangePasswordModal />}
                    <ToastContainer />
                </section>
            </Layout>
        </>
    )
}

export default MiCuenta