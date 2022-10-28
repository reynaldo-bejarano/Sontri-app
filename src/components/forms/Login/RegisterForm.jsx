import { FirebaseCreateUser } from "../../../firebase/firebase"
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { appContext } from "../../../context/AppProvider";
import firebaseErrors from "../../../firebase/firebaseErrors";

const RegisterForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { handleRegisterModal } = useContext(appContext);
    const [error, setError] = useState();

    const onSubmit = async (data) => {
        const { email, password, company } = data;
        try {
            await FirebaseCreateUser(email, password, company);
            handleRegisterModal();
        } catch (error) {
            setError(firebaseErrors(error.code));
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">

                <input
                    type="text"
                    placeholder="Nombre"
                    className={errors.name ? "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5] rounded-sm outline-none  border-red-500 dark:border-red-500 border-2" : "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none   border-2"}

                    {...register("name", {
                        required: {
                            value: true,
                            message: "El nombre es requerido"
                        }
                    })}
                />
                {errors.name && <p className="text-xs px-2 text-red-500">*{errors.name.message}</p>}
            </div>

            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Apellido"
                    className={errors.lastname ? "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none  border-red-500 dark:border-red-500 border-2" : "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none   border-2"}
                    {...register("lastname", {
                        required: {
                            value: true,
                            message: "El apellido es requerido"
                        }
                    })}
                />
                {errors.lastname && <p className="text-xs px-2 text-red-500">*{errors.lastname.message}</p>}

            </div>



            <div className="mb-3">
                <input
                    type="text"
                    placeholder="Empresa"
                    className={errors.company ? "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none  border-red-500 dark:border-red-500 border-2" : "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none   border-2"}
                    {...register("company", {
                        required: {
                            value: true,
                            message: "El nombre de la empresa es requerido"
                        }
                    })}
                />
                {errors.company && <p className="text-xs px-2 text-red-500">*{errors.company.message}</p>}
            </div>

            <div className="mb-3">
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    className={errors.email ? "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none  border-red-500 dark:border-red-500 border-2" : "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none   border-2"}
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
                {error && <p className="text-xs px-2 text-red-500">{error}</p>}
                {errors.email && <p className="text-xs px-2 text-red-500">*{errors.email.message}</p>}
            </div>

            <div className="mb-3">
                <input
                    type="email"
                    placeholder="Confirmar correo electrónico"
                    className={errors.reemail ? "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none  border-red-500 dark:border-red-500 border-2" : "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5] rounded-sm outline-none   border-2"}
                    {...register("reemail", {
                        required: {
                            value: true,
                            message: "El confirmar correo es requerido"
                        },
                        pattern: {
                            value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                            message: "Ingresa un formato de correo valido"
                        },
                    })}
                />
                {errors.reemail && <p className="text-xs px-2 text-red-500">*{errors.reemail.message}</p>}
            </div>

            <div className="mb-3">
                <input
                    type="password"
                    placeholder="Contraseña"
                    className={errors.password ? "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none  border-red-500 dark:border-red-500 border-2" : "w-full text-sm p-2 bg-[#f0f2f5] dark:bg-[#f0f2f5]  rounded-sm outline-none   border-2"}
                    {...register("password", {
                        required: {
                            value: true,
                            message: "El contraseña es requerida"
                        },
                        minLength: {
                            value: 8,
                            message: "Contraseña mínimo de ocho carácteres"
                        },
                    })}
                />
                {errors.password && <p className="text-xs px-2 text-red-500">*{errors.password.message}</p>}
            </div>


            <p className="text-[10px] 2xl:text-sm py-5">Al hacer clic en "Registrarte", aceptas nuestras Condiciones, la Política de privacidad y la Política de cookies. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>

            <button
                type="submit"
                className="w-full py-1 2xl:px-20 2xl:py-1 2xl:text-lg bg-blue-900 text-white dark:text-white rounded-md border-blue-900 dark:border-blue-900 border-4 hover:border-4 hover:border-gray-200 dark:hover:border-gray-200 hover:bg-white hover:text-blue-900 dark:hover:text-blue-900 font-bold shadow-lg mb-5"
            >
                Registrarse
            </button>
        </form>
    )
}

export default RegisterForm