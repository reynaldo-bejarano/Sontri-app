import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { FirebaseSignInUserWithEmailAndPassword } from '../../../firebase/firebase';
import firebaseErrors from '../../../firebase/firebaseErrors';

const LoginForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState();



    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            await FirebaseSignInUserWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error.code)
            setError(firebaseErrors(error.code));
        }
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div className='mb-3'>
                <input
                    type="text"
                    placeholder="Ingresa tu correo electrónico"
                    className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 "
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

            <div className='mb-3'>
                <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    className="w-full text-sm p-2 bg-[#f0f2f5] rounded-sm outline-blue-900 "
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
                {error && <p className="text-xs px-2 text-red-500">{error}</p>}
                {errors.password && <p className="text-xs px-2 text-red-500">*{errors.password.message}</p>}
            </div>


            <button
                type="submit"
                className="w-full py-1 2xl:px-20 2xl:py-1 2xl:text-lg bg-green-800 text-white rounded-md border-green-800 border-4 hover:border-4 hover:border-gray-200 hover:bg-white hover:text-green-800 font-bold shadow-lg mb-5"
            >
                Iniciar sesión
            </button>
        </form>
    )
}

export default LoginForm