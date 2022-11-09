import { FiCopy } from 'react-icons/fi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useContext } from 'react';
import { appContext } from '../../../context/AppProvider';

const CopyLinkFormModal = () => {
    const { handleCopyLinkFormModal } = useContext(appContext);

    return (
        <div>
            <div className="w-full lg:w-[700px] rounded-lg 2xl:w-[700px] md:mx-auto 
dark:bg-[#334155] bg-[#334155] absolute top-1/4 md:top-1/2 lg:md:top-1/2 md:left-1/2 md:transform 
md:-translate-x-1/2 md:-translate-y-1/2 border-2 dark:border-white border-white">
                <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                    <div className="flex justify-end mb-5">
                        <button onClick={handleCopyLinkFormModal}>
                            <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white" />
                        </button>
                    </div>
                    <div className=" h-96 overflow-auto">
                        {/* map */}
                        <p className="p-2 mb-2  rounded-lg h-10 bg-white dark:bg-white flex justify-between items-center"
                        >Nombre del formulario <button><FiCopy /></button>
                        </p>
                        {/* map */}
                        <p className="p-2 mb-2  rounded-lg h-10 bg-white dark:bg-white flex justify-between items-center"
                        >Nombre del formulario <button><FiCopy /></button>
                        </p>
                        {/* map */}
                        <p className="p-2 mb-2  rounded-lg h-10 bg-white dark:bg-white flex justify-between items-center"
                        >Nombre del formulario <button><FiCopy /></button>
                        </p>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default CopyLinkFormModal