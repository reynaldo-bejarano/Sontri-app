import { useContext, useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';
import { FiCopy } from 'react-icons/fi';
import { authContext } from '../../../context/AuthProvider';


const DetailsFormModal = () => {
    const { handleDetailsFormModalOpen, formDetailsId } = useContext(appContext);
    const { FirebaseGetFormDetails, formDetailsData } = useContext(authContext);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        try {
            setLoading(true);
            FirebaseGetFormDetails(formDetailsId);
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false);
        }
    }, [])

    if (loading === true) {
        return <div>Cargando...</div>
    }


    return (
        <div className="w-full lg:w-[700px] rounded-lg 2xl:w-[700px] md:mx-auto 
    dark:bg-[#334155] bg-[#334155] absolute top-1/4 md:top-1/3 lg:md:top-1/2 md:left-1/2 md:transform 
    md:-translate-x-1/2 md:-translate-y-1/2 border-2 dark:border-white border-white">
            <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleDetailsFormModalOpen}>
                        <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white dark:text-white" />
                    </button>
                </div>

                {/* Ciclo */}

                {formDetailsData && <div className="grid gap-2">
                    <div className="grid grid-cols-5 gap-5">
                        <p className="col-span-3 p-2 rounded-lg bg-white dark:bg-white">
                            {formDetailsData.TSON_T_FormName}
                        </p>
                        <p
                            className='col-span-2 bg-white dark:bg-white w-full p-2 rounded-lg text-sm'>
                            {formDetailsData.FK_SON_CAT_FormSON_InterestSON_InterestID}
                        </p>
                    </div>
                    <p className="p-2 rounded-lg bg-white dark:bg-white flex justify-between items-center"
                    >{formDetailsData.TSON_T_FormLink}<button><FiCopy /></button>
                    </p>
                    <p className="p-2 rounded-lg bg-white dark:bg-white flex justify-between items-center"
                    >{formDetailsData.TSON_T_FormLinkResults}<button><FiCopy /></button>
                    </p>

                    <div className="py-2">
                        <p className="dark:text-white text-white  mb-2">Rango de edad</p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center flex-wrap gap-2 ">
                                <div className={formDetailsData.TSON_T_FormAge === "1"
                                    ? "h-[20px] w-[20px] mx-auto bg-blue-600 rounded-full border-[1px] border-white"
                                    : "h-[20px] w-[20px] mx-auto bg-gray-200 rounded-full border-[1px] border-white"}
                                >
                                </div>
                                <label className="text-white dark:text-white">Sin rango</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <div className={formDetailsData.TSON_T_FormAge === "2"
                                    ? "h-[20px] w-[20px] mx-auto bg-blue-600 rounded-full border-[1px] border-white"
                                    : "h-[20px] w-[20px] mx-auto bg-gray-200 rounded-full border-[1px] border-white"}
                                >
                                </div>
                                <label className="text-white dark:text-white">18 - 30</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <div className={formDetailsData.TSON_T_FormAge === "3"
                                    ? "h-[20px] w-[20px] mx-auto bg-blue-600 rounded-full border-[1px] border-white"
                                    : "h-[20px] w-[20px] mx-auto bg-gray-200 rounded-full border-[1px] border-white"}
                                >
                                </div>
                                <label className="text-white dark:text-white">31 - 40</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <div className={formDetailsData.TSON_T_FormAge === "4"
                                    ? "h-[20px] w-[20px] mx-auto bg-blue-600 rounded-full border-[1px] border-white"
                                    : "h-[20px] w-[20px] mx-auto bg-gray-200 rounded-full border-[1px] border-white"}
                                >
                                </div>
                                <label className="text-white dark:text-white">41 - 50</label>
                            </div>
                            <div className="flex items-center flex-wrap gap-2">
                                <div className={formDetailsData.TSON_T_FormAge === "5"
                                    ? "h-[20px] w-[20px] mx-auto bg-blue-600 rounded-full border-[1px] border-white"
                                    : "h-[20px] w-[20px] mx-auto bg-gray-200 rounded-full border-[1px] border-white"}
                                >
                                </div>
                                <label className="text-white dark:text-white">51 +</label>
                            </div>
                        </div>
                    </div>
                </div>}
                {/* Ciclo */}
            </div>

        </div>
    )
}

export default DetailsFormModal