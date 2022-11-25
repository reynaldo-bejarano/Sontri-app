import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';
import { authContext } from '../../../context/AuthProvider';
import { toast } from 'react-toastify';


const AddFormModal = () => {

    const { handleAddFormModalOpen } = useContext(appContext);
    const { FirebaseGetInterests, FirebaseCreateForm, interestData } = useContext(authContext);

    const { register, handleSubmit, formState: { errors } } = useForm();

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

    useEffect(() => {
        try {
            FirebaseGetInterests();
        } catch (error) {
            console.log(error.message)
        }

    }, [])

    const onSubmit = (data) => {
        try {
            console.log(data)
            FirebaseCreateForm(data)
            notify("Formulario agregado");
            handleAddFormModalOpen();
      
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div>
            <div className="w-full lg:w-[700px] rounded-lg 2xl:w-[700px] md:mx-auto 
                    dark:bg-[#334155] bg-[#334155] absolute top-1/4 md:top-1/3 lg:md:top-1/2 md:left-1/2 md:transform 
                    md:-translate-x-1/2 md:-translate-y-1/2 border-2 border-white dark:border-white">
                <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                    <div className="flex justify-end mb-5">
                        <button onClick={handleAddFormModalOpen}>
                            <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white dark:text-white" />
                        </button>
                    </div>
                    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid grid-cols-5 gap-5">
                            <input
                                type="text"
                                placeholder="Nombre del formulario"
                                className="col-span-3 p-2 rounded-lg"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "El nombre es requerido"
                                    }
                                })}
                            />

                            <select
                                className='col-span-2 w-full p-2 rounded-lg text-sm'
                                {...register("interest", {
                                    required: {
                                        value: true,
                                    }
                                })}
                            >

                                {interestData.map(item => <option key={item.PK_TSON_T_InterestDocument} value={item.TSON_T_Interest}>{item.TSON_T_Interest}</option>)}

                            </select>
                        </div>

                        <input
                            type="text"
                            className="p-2 rounded-lg"
                            placeholder="Enlace del formulario"
                            {...register("linkForm", {
                                required: {
                                    value: true,
                                }
                            })}
                        />
                        <input
                            type="text"
                            className="p-2 rounded-lg"
                            placeholder="Enlace de respuestas"
                            {...register("linkFormResults", {
                                required: {
                                    value: true,
                                }
                            })}
                        />

                        <div className="py-2">
                            <p className="dark:text-white text-white mb-2">Rango de edad</p>
                            {errors.radio && <p className='py-2 text-yellow-400'>{errors.radio.message}</p>}

                            <div className="flex items-center gap-4">
                                <div className="flex items-center flex-wrap gap-2 ">
                                    <input
                                        type="radio"
                                        value="1"
                                        className="h-[20px] w-[20px] mx-auto"
                                        {...register("radio", {
                                            required: {
                                                value: true,
                                                message: "Selecciona una opción de edad"
                                            }
                                        })}
                                    />
                                    <label className="text-white dark:text-white">Sin rango</label>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <input
                                        type="radio"
                                        value="2"
                                        className="h-[20px] w-[20px] mx-auto"
                                        {...register("radio", {
                                            required: {
                                                value: true,
                                                message: "Selecciona una opción de edad"
                                            }
                                        })}
                                    />
                                    <label className="text-white dark:text-white">18 - 30</label>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <input
                                        type="radio"
                                        value="3"
                                        className="h-[20px] w-[20px] mx-auto"
                                        {...register("radio", {
                                            required: {
                                                value: true,
                                                message: "Selecciona una opción de edad"
                                            }
                                        })} />
                                    <label className="text-white dark:text-white">31 - 40</label>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <input
                                        type="radio"
                                        value="4"
                                        className="h-[20px] w-[20px] mx-auto"
                                        {...register("radio", {
                                            required: {
                                                value: true,
                                                message: "Selecciona una opción de edad"
                                            }
                                        })} />
                                    <label className="text-white dark:text-white">41 - 50</label>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <input
                                        type="radio"
                                        value="5"
                                        className="h-[20px] w-[20px] mx-auto"
                                        {...register("radio", {
                                            required: {
                                                value: true,
                                                message: "Selecciona una opción de edad"
                                            }
                                        })} />
                                    <label className="text-white dark:text-white">51 +</label>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-end gap-2 py-2">
                            <a
                                href="https://docs.google.com/forms/u/0/"
                                target="_blanck"
                                className='dark:bg-purple-800 bg-purple-800 rounded-lg py-2 px-10 text-sm text-white dark:text-white font-bold'
                            >
                                Google Forms
                            </a>
                            <button
                                type='submit'
                                className='dark:bg-green-700 bg-green-700 rounded-lg py-2 px-10 text-sm text-white dark:text-white font-bold'
                            >
                                Enviar
                            </button>
                        </div>




                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddFormModal