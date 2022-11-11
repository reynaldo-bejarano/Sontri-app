import { useEffect } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';
import { authContext } from '../../../context/AuthProvider';

const AddInteres = () => {
    const { handleAddInteresModalOpen } = useContext(appContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userAuthState, FirebaseCreateInterest } = useContext(authContext);

    const onSubmit = (data) => {
        try {
            FirebaseCreateInterest(data);
            handleAddInteresModalOpen();

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="w-full lg:w-[500px] rounded-lg 2xl:w-[500px] md:mx-auto 
    dark:bg-[#334155] bg-[#334155] absolute top-1/4 md:top-1/3 lg:md:top-1/3 md:left-1/2 md:transform 
    md:-translate-x-1/2 md:-translate-y-1/2 border-2 border-white dark:border-white">
            <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleAddInteresModalOpen}>
                        <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white dark:text-white" />
                    </button>
                </div>
                <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        className="p-2 rounded-lg"
                        placeholder="Agregar el Interes"
                        {...register("interes", {
                            required: {
                                value: true,
                            }
                        })}
                    />
                    <div className="flex justify-end  py-2">
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

export default AddInteres