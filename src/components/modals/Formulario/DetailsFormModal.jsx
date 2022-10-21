import { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';
import { FiCopy } from 'react-icons/fi';


const DetailsFormModal = () => {
    const { handleDetailsFormModalOpen } = useContext(appContext);

    return (
        <div className="w-full lg:w-[700px] rounded-lg 2xl:w-[700px] md:mx-auto 
    dark:bg-[#334155] absolute top-1/4 md:top-1/3 lg:md:top-1/2 md:left-1/2 md:transform 
    md:-translate-x-1/2 md:-translate-y-1/2 border-2 dark:border-white">
            <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleDetailsFormModalOpen}>
                        <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white" />
                    </button>
                </div>
                <div className="grid gap-2">
                    <div className="grid grid-cols-5 gap-5">
                        <p className="col-span-3 p-2 rounded-lg bg-white">Nombre del formulario</p>
                        <p name="cars" id="cars"
                            className='col-span-2 bg-white w-full p-2 rounded-lg text-sm'>
                            Interes
                        </p>
                    </div>
                    <p className="p-2 rounded-lg bg-white flex justify-between items-center"
                    >Enlace del formulario <button><FiCopy /></button>
                    </p>
                    <p className="p-2 rounded-lg bg-white flex justify-between items-center"
                    >Enlace de respuesta<button><FiCopy /></button>
                    </p>


                   

                    <div className="py-2">
                        <p className="dark:text-white mb-2">Rango de edad</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center flex-wrap gap-2 ">
                                <input
                                    type="radio"
                                    name="age" value="1"
                                    checked="true"

                                    className="h-[20px] w-[20px] mx-auto" />
                                <label className="text-white">Sin rango</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <input
                                    type="radio"
                                    name="age" value="2"
                                    className="h-[20px] w-[20px] mx-auto" />
                                <label className="text-white">18 - 30</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <input
                                    type="radio"
                                    name="age" value="3"
                                    className="h-[20px] w-[20px] mx-auto" />
                                <label className="text-white">31 - 40</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <input
                                    type="radio"
                                    name="age" value="4"
                                    className="h-[20px] w-[20px] mx-auto" />
                                <label className="text-white">41 - 50</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <input
                                    type="radio"
                                    name="age" value="5"
                                    className="h-[20px] w-[20px] mx-auto" />
                                <label className="text-white">51 +</label>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default DetailsFormModal