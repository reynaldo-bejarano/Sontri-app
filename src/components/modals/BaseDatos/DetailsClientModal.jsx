import { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';
import { FiCopy } from 'react-icons/fi';


const DetailsClientModal = () => {
    const { handleDetailsClientModalOpen } = useContext(appContext);

    return (
        <div className="w-full lg:w-[700px] rounded-lg 2xl:w-[700px] md:mx-auto 
    dark:bg-[#334155] absolute top-1/4 md:top-1/3 lg:md:top-1/3 md:left-1/2 md:transform 
    md:-translate-x-1/2 md:-translate-y-1/2 border-2 border-white">
            <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleDetailsClientModalOpen}>
                        <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white" />
                    </button>
                </div>
                <form className="grid gap-2">
                    <div className="grid md:grid-cols-6 gap-3">
                        <p className="col-span-2 p-2 rounded-lg bg-white text-gray-600">Nicole</p>
                        <p className="col-span-2 p-2 rounded-lg bg-white text-gray-600">Retana Porras</p>
                        <p className="col-span-2 p-2 rounded-lg bg-white text-gray-600">+5062222000</p>
                    </div>

                    <p className=" p-2 rounded-lg bg-white flex justify-between items-center"
                    >nicole.retana@uhispano.ac.cr <button><FiCopy /></button>
                    </p>


                    <div className="grid grid-cols-6 gap-3">
                        <p className="col-span-2 p-2 rounded-lg bg-white text-gray-600">Fecha</p>
                        <p className="col-span-2 p-2 rounded-lg bg-white text-gray-600">Intéres 1</p>
                        <p className="col-span-2 p-2 rounded-lg bg-white text-gray-600">Intéres 2</p>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default DetailsClientModal