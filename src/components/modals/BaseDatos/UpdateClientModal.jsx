import { useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';
import { authContext } from '../../../context/AuthProvider';

const UpdateClientModal = () => {
    const { handleUpdateClientModalOpen, clientUpdateId } = useContext(appContext);
    const { FirebaseGetClientDetails, FirebaseGetInterests, clientDetailsData, interestData, FirebaseUpdateClientDetails } = useContext(authContext);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    useEffect(() => {
        try {
            FirebaseGetClientDetails(clientUpdateId);
            if (clientDetailsData) {
                setValuesForm();
            }

        } catch (error) {
            console.log(error.message)
        }
    }, [])

    useEffect(() => {
        try {
            FirebaseGetInterests();
        } catch (error) {
            console.log(error.message)

        }
    })

    const setValuesForm = () => {
        setValue("name", clientDetailsData.TSON_T_ClientName);
        setValue("lastname", clientDetailsData.TSON_T_ClientLastname);
        setValue("phone", clientDetailsData.TSON_T_ClientPhone);
        setValue("email", clientDetailsData.TSON_T_ClientEmail);
        setValue("date", clientDetailsData.TSON_T_ClientBirthday);
        setValue("firstInterest", clientDetailsData.FK_SON_CAT_ClientSON_InterestSON_First_InterestID)
        setValue("secondInterest", clientDetailsData.FK_SON_CAT_ClientSON_InterestSON_Second_InterestID)

    }

    const onSubmit = (data) => {
        try {
            FirebaseUpdateClientDetails(data, clientUpdateId)
            handleUpdateClientModalOpen();
        } catch (error) {
            console.log(error.message)
        }
    }




    return (
        <div className="w-full lg:w-[700px] rounded-lg 2xl:w-[700px] md:mx-auto 
    dark:bg-[#334155] bg-[#334155]  absolute top-1/4 md:top-1/3 lg:md:top-1/3 md:left-1/2 md:transform 
    md:-translate-x-1/2 md:-translate-y-1/2 border-2 border-white dark:border-white">
            <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleUpdateClientModalOpen}>
                        <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white dark:text-white" />
                    </button>
                </div>
                {clientDetailsData &&
                    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid md:grid-cols-6 gap-3">
                            <input type="text"
                                placeholder="Nombre" className="col-span-2 p-2 rounded-lg"
                                {...register("name", {
                                    required: {
                                        value: true,
                                    }
                                })}
                            />
                            <input type="text" placeholder="Apellido" className="col-span-2 p-2 rounded-lg"
                                {...register("lastname", {
                                    required: {
                                        value: true,
                                    }
                                })}
                            />
                            <input type="text" placeholder="Teléfono" className="col-span-2 p-2 rounded-lg"
                                {...register("phone", {
                                    required: {
                                        value: true,
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
                                },
                                pattern: {
                                    value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                                },
                            })}
                        />
                        <div className="grid grid-cols-6 gap-3">
                            <input type="date" className="col-span-2 p-2 rounded-lg"
                                {...register("date", {
                                    required: {
                                        value: true,
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
                                className='dark:bg-orange-600 bg-orange-600 rounded-lg py-2 px-10 text-sm text-slate-800 dark:text-slate-800  font-bold'
                            >
                                Actualizar
                            </button>
                        </div>
                    </form>
                }

            </div>
        </div>
    )
}

export default UpdateClientModal