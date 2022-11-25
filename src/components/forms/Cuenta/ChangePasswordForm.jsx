import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../../context/AuthProvider';
import { appContext } from "../../../context/AppProvider";
import { toast } from 'react-toastify';

const ChangePasswordForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { FirebaseUpdatePassword } = useContext(authContext);
    const { handleChangePasswordModalIsOpen } = useContext(appContext)


    const notify = (message) => toast.info(message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });


    const onSubmit = async (data) => {

        const { oldPassword, newPassword, newRepeatPassword } = data;
        try {
            if (newPassword.trim() === newRepeatPassword.trim()) {
                FirebaseUpdatePassword(oldPassword.trim(), newPassword.trim());
                notify("Contraseña actualizada");
                handleChangePasswordModalIsOpen();
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="password" placeholder="Contraseña actual"
                className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-2 text-slate-600"
                {...register("oldPassword", {
                    required: {
                        value: true,
                    },
                    minLength: {
                        value: 8,
                    }

                })}
            />
            <input type="password" placeholder="Nueva contraseña" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-2 text-slate-600"
                {...register("newPassword", {
                    required: {
                        value: true,
                    },
                    minLength: {
                        value: 8,
                    }

                })}
            />
            <input type="password" placeholder="Confirmar nueva contraseña"
                className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-5 text-slate-600"
                {...register("newRepeatPassword", {
                    required: {
                        value: true,
                    },
                    minLength: {
                        value: 8,
                    }
                })}
            />
            <button
                type="submit"
                className="w-full py-1 2xl:px-20 2xl:py-1 2xl:text-lg bg-blue-900 text-white rounded-md border-blue-900 border-4 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-blue-900 font-bold shadow-lg mb-5"

            >
                Actualizar contraseña
            </button>
        </form>
    )
}

export default ChangePasswordForm