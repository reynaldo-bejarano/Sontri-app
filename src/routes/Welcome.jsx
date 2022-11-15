import { useContext } from "react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { authContext } from "../context/AuthProvider"

const Welcome = () => {

    const { displayName, FirebaseFirstLoginInterest } = useContext(authContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (data) => {

        try {
            FirebaseFirstLoginInterest(data);
            navigate("/");
        } catch (error) {

        }
    }

    return (
        <div>
            <div className="py-20">
                <h3 className="text-center text-2xl">Bienvenido</h3>
                <h3 className="text-center text-4xl">{displayName}</h3>
            </div>
            <div>
                <p className="text-center ">Agrega tres intereses de acuerdo a tu empresa para segmentar a tus clientes por sus intereses </p>
                <p className="text-xs mb-5 text-center">Ej: Si tu empresa es una juguetería puedes agregar Legos, Carros, Descuentos</p>
                <form className="w-[95%] grid  justify-center gap-5 md:container mx-auto" onSubmit={handleSubmit(onSubmit)} >
                    <div className="grid grid-cols-3 gap-5">
                        <input className="p-2 bg-gray-200 text-slate-800" type="text" placeholder="Interes 1"
                            {...register("interes1", {
                                required: {
                                    value: true,
                                }
                            })}
                        />
                        <input className="p-2 bg-gray-200 text-slate-800" type="text" placeholder="Interes 2"
                            {...register("interes2", {
                                required: {
                                    value: true,
                                }
                            })}
                        />
                        <input className="p-2 bg-gray-200 text-slate-800" type="text" placeholder="Interes 3"
                            {...register("interes3", {
                                required: {
                                    value: true,
                                }
                            })}
                        />
                    </div>


                    <button className="bg-green-700 py-2 rounded-lg text-white" type="submit">Continuar</button>
                </form>
            </div>

        </div>
    )
}

export default Welcome