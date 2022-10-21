import { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';

const AddClientModal = () => {
    
    const { handleAddClientModalOpen } = useContext(appContext);

    return (
        <div className="w-full lg:w-[700px] rounded-lg 2xl:w-[700px] md:mx-auto 
    dark:bg-[#334155] absolute top-1/4 md:top-1/3 lg:md:top-1/3 md:left-1/2 md:transform 
    md:-translate-x-1/2 md:-translate-y-1/2 border-2 border-white">
            <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleAddClientModalOpen}>
                        <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white" />
                    </button>
                </div>
                <form className="grid gap-2">
                    <div className="grid md:grid-cols-6 gap-3">
                        <input type="text" placeholder="Nombre" className="col-span-2 p-2 rounded-lg" />
                        <input type="text" placeholder="Apellido" className="col-span-2 p-2 rounded-lg" />
                        <input type="text" placeholder="Teléfono" className="col-span-2 p-2 rounded-lg" />

                    </div>

                    <input
                        type="text"
                        className="p-2 rounded-lg"
                        placeholder="Correo electrónico"
                    />
                    <div className="grid grid-cols-6 gap-3">
                        <input type="date" className="col-span-2 p-2 rounded-lg" />

                        <select name="cars" id="cars"
                            className='col-span-2 w-full p-2 rounded-lg text-sm'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <select name="cars" id="cars"
                            className='col-span-2 w-full p-2 rounded-lg text-sm'>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>                    </div>

                    <div className="flex justify-end py-2">

                        <button
                            type='submit'
                            className='dark:bg-green-700 rounded-lg py-2 px-10 text-sm text-white font-bold'
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