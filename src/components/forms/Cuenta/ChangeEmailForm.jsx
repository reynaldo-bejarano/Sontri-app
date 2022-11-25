import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../../context/AuthProvider';
import { appContext } from "../../../context/AppProvider";
import { toast } from 'react-toastify';

const ChangeEmailForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { FirebaseUpdateEmail } = useContext(authContext);
    const { handleChangeEmailModalIsOpen } = useContext(appContext)


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

        const { email, reemail, password } = data;
        try {
            if (email.trim() === reemail.trim()) {
                FirebaseUpdateEmail(email.trim(), password.trim())
                notify("Correo electrónico actualizado");
                handleChangeEmailModalIsOpen();
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" placeholder="Nuevo correo electrónico"
                className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-2 text-slate-600"
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
            <input type="email" placeholder="Confirmar correo electrónico" className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-2 text-slate-600"
                {...register("reemail", {
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
            <input type="password" placeholder="Ingresa tu contraseña"
                className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 mb-5 text-slate-600"
                {...register("password", {
                    required: {
                        value: true,
                        message: "La contraseña es requerida."
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
                Actualizar correo electrónico
            </button>
        </form>
    )
}

export default ChangeEmailForm