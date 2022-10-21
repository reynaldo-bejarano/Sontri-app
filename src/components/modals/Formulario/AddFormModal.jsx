import { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';

const AddFormModal = () => {

    const { handleAddFormModalOpen } = useContext(appContext);

    return (
        <div className="w-full lg:w-[700px] rounded-lg 2xl:w-[700px] md:mx-auto 
                    dark:bg-[#334155] bg-[#334155] absolute top-1/4 md:top-1/3 lg:md:top-1/2 md:left-1/2 md:transform 
                    md:-translate-x-1/2 md:-translate-y-1/2 border-2 border-white dark:border-white">
            <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleAddFormModalOpen}>
                        <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white dark:text-white" />
                    </button>
                </div>
                <form className="grid gap-2">
                    <div className="grid grid-cols-5 gap-5">
                        <input type="text" placeholder="Nombre del formulario" className="col-span-3 p-2 rounded-lg" />


                        <select name="cars" id="cars"
                            className='col-span-2 w-full p-2 rounded-lg text-sm'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>

                    <input
                        type="text"
                        className="p-2 rounded-lg"
                        placeholder="Enlace del formulario"
                    />
                    <input
                        type="text"
                        className="p-2 rounded-lg"
                        placeholder="Enlace de respuestas"
                    />

                    <div className="py-2">
                        <p className="dark:text-white text-white mb-2">Rango de edad</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center flex-wrap gap-2 ">
                                <input
                                    type="radio"
                                    name="age" value="1"
                                    checked="true"
                                    className="h-[20px] w-[20px] mx-auto" />
                                <label className="text-white dark:text-white">Sin rango</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <input
                                    type="radio"
                                    name="age" value="2"
                                    className="h-[20px] w-[20px] mx-auto" />
                                <label className="text-white dark:text-white">18 - 30</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <input
                                    type="radio"
                                    name="age" value="3"
                                    className="h-[20px] w-[20px] mx-auto" />
                                <label className="text-white dark:text-white">31 - 40</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <input
                                    type="radio"
                                    name="age" value="4"
                                    className="h-[20px] w-[20px] mx-auto" />
                                <label className="text-white dark:text-white">41 - 50</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <input
                                    type="radio"
                                    name="age" value="5"
                                    className="h-[20px] w-[20px] mx-auto" />
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
    )
}

export default AddFormModal