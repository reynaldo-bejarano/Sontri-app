import { useContext, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import CopyButton from '../components/buttons/CopyButton';
import Layout from '../components/layout/Layout'
import CopyLinkFormModal from '../components/modals/Mensajeria/CopyLinkFormModal';
import { appContext } from '../context/AppProvider';
import { authContext } from '../context/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mensajeria = () => {

    const { CopyLinkFormModalIsOpen, handleCopyLinkFormModal } = useContext(appContext);
    const { FirebaseCreateMessage } = useContext(authContext);
    const { FirebaseGetClients, clientsData } = useContext(authContext);
    const form = useRef();

    const notify = (message) => toast.success(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const notifyError = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });;


    useEffect(() => {
        try {
            FirebaseGetClients();
        } catch (error) {
            console.log(error);
        }
    }, [])

    const sendEmail = async (e) => {
        e.preventDefault();
        await emailjs.sendForm('service_iv79yle', 'template_b5x48ol', form.current, 'gndtHF1xz2tsx9xmQ')
            .then(async (result) => {
                console.log(result)
                await FirebaseCreateMessage(form.current.email.value)
                notify("Mensaje enviado");
            }, (error) => {
                if (error.text === "The recipient address is empty") {
                    notifyError("La dirrección de email está vacia");
                }
            });
    };

    return (
        <>
            <Layout>
                <section className="dark:bg-[#F0F2F5] bg-[#F0F2F5] w-full relative">
                    <div className="dark:bg-slate-800 bg-slate-800 w-full md:h-96 lg:h-64 py-14">
                        <div className="grid lg:grid-cols-2">
                            <div className='bg-[#334155] dark:bg-[#334155] w-full md:w-[500px] lg:w-full mx-auto  px-5 py-10 '>
                                <div>
                                    <div className='mb-2'>
                                        <input type="email" placeholder='Buscar' className='p-2 rounded-sm text-sm w-full' />
                                    </div>
                                    <div className='dark:bg-white bg-white h-72 w-full overflow-auto '>

                                        {clientsData && clientsData.map(item =>
                                            <div key={item.PK_TSON_T_ClientDocument} className='grid grid-cols-12 gap-2 w-full  text-sm border-b dark:border-slate-700 border-slate-700  p-2 '>
                                                <input type="checkbox" className='col-span-1 cursor-pointer' />
                                                <p className='border-l dark:border-slate-700 border-slate-700 px-1 col-span-5 overflow-hidden'>{item.TSON_T_ClientEmail}</p>
                                                <p className='border-l border-r dark:border-slate-700 border-slate-700 px-1 col-span-5 overflow-hidden'> {item.TSON_T_ClientName + " " + item.TSON_T_ClientLastname}</p>
                                                <CopyButton link={item.TSON_T_ClientEmail} title="Correo electrónico copiado" />
                                            </div>
                                            
                                        )}

                                    </div>
                                </div>
                            </div>



                            {/* segunda  */}

                            <div className='bg-[#334155] dark:bg-[#334155] md:w-[500px] lg:w-full mx-auto  px-5 py-10 '>
                                <form ref={form} onSubmit={sendEmail}>
                                    <div className='mb-2'>
                                        <input type="email"
                                            name='email'
                                            placeholder='Ingresa el correo electrónico'
                                            className='p-2 rounded-sm text-sm w-full'
                                        />
                                    </div>
                                    <input type="text"
                                        placeholder='Asunto'
                                        name='subject'
                                        className='w-full p-2 rounded-sm text-sm mb-5'
                                    />
                                    <textarea type="text"
                                        placeholder=''
                                        name='message'
                                        className='w-full p-2 rounded-sm text-sm mb-5 h-56'
                                    />
                                    <div className='grid grid-cols-2 gap-5'>
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
                    <ToastContainer />
                </section>
            </Layout>
        </>
    )
}

export default Mensajeria