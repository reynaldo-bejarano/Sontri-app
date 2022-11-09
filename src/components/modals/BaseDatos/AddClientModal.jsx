import { useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';
import { authContext } from '../../../context/AuthProvider';

const AddClientModal = () => {

    const { handleAddClientModalOpen } = useContext(appContext);
    const { FirebaseGetInterests, interestData, FirebaseCreateClient } = useContext(authContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    useEffect(() => {
        try {
            FirebaseGetInterests();
        } catch (error) {
            console.log(error.message)
        }

    }, [])

    const onSubmit = (data) => {
        try {
            FirebaseCreateClient(data)
            handleAddClientModalOpen();
        } catch (error) {
            console.log(error.message)
        }
    }


    return (
        <div className="w-full lg:w-[700px] rounded-lg 2xl:w-[700px] md:mx-auto 
    dark:bg-[#334155] bg-[#334155] absolute top-1/4 md:top-1/3 lg:md:top-1/3 md:left-1/2 md:transform 
    md:-translate-x-1/2 md:-translate-y-1/2 border-2 border-white dark:border-white">
            <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleAddClientModalOpen}>
                        <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white dark:text-white" />
                    </button>
                </div>
                <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-6 gap-3">
                        <input
                            type="text" placeholder="Nombre" className="col-span-2 p-2 rounded-lg"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "El nombre es requerido"
                                }
                            })}
                        />
                        <input type="text" placeholder="Apellido" className="col-span-2 p-2 rounded-lg"
                            {...register("lastname", {
                                required: {
                                    value: true,
                                    message: "El nombre es requerido"
                                }
                            })}
                        />
                        <input type="text" placeholder="Teléfono" className="col-span-2 p-2 rounded-lg"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "El nombre es requerido"
                                }
                            })}
                        />

                    </div>

                    <input
                        type="text"
                        className="p-2 rounded-lg"
                        placeholder="Correo electrónico"
                        {...register("email", {
                            required: {
                                value: true,
                                message: "El correo electrónico es requerido"
                            },
                            pattern: {
                                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                message: "Ingresa un formato de correo valido"
                            },
                        })}
                    />
                    <div className="grid grid-cols-6 gap-3">
                        <input type="date" className="col-span-2 p-2 rounded-lg"
                            {...register("date", {
                                required: {
                                    value: true,
                                    message: "El correo electrónico es requerido"
                                },

                            })}
                        />

                        <select
                            className='col-span-2 w-full p-2 rounded-lg text-sm'
                            {...register("firstInterest", {
                                required: {
                                    value: true,
                                }
                            })}
                        >
                            {interestData.map(item => <option key={item.PK_TSON_T_InterestDocument} value={item.TSON_T_Interest}>{item.TSON_T_Interest}</option>)}

                        </select>
                        <select
                            className='col-span-2 w-full p-2 rounded-lg text-sm'
                            {...register("secondInterest", {
                                required: {
                                    value: true,
                                }
                            })}
                        >
                            {interestData.map(item => <option key={item.PK_TSON_T_InterestDocument} value={item.TSON_T_Interest}>{item.TSON_T_Interest}</option>)}

                        </select>
                    </div>

                    <div className="flex justify-end py-2">

                        <button
                            type='submit'
                            className='dark:bg-green-700 bg-green-700 rounded-lg py-2 px-10 text-sm text-white dark:text-white font-bold'
                        >
                            Agregar
                        </button>
                    </div>




                </form>
            </div>
        </div>
    )
}

export default AddClientModal