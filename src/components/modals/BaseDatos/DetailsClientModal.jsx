import { useContext } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { appContext } from '../../../context/AppProvider';
import { FiCopy } from 'react-icons/fi';
import { useEffect } from 'react';
import { authContext } from '../../../context/AuthProvider';
import { useState } from 'react';


const DetailsClientModal = () => {
    const { handleDetailsClientModalOpen, clientDetailsId } = useContext(appContext);
    const { FirebaseGetClientDetails, clientDetailsData } = useContext(authContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            FirebaseGetClientDetails(clientDetailsId);
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
    dark:bg-[#334155] bg-[#334155] absolute top-1/4 md:top-1/3 lg:md:top-1/3 md:left-1/2 md:transform 
    md:-translate-x-1/2 md:-translate-y-1/2 border-2 border-white dark:border-white">
            <div className="p-5 md:px-10 2xl:p-10  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleDetailsClientModalOpen}>
                        <AiFillCloseCircle className="text-3xl 2xl:text-4xl text-white dark:text-white" />
                    </button>
                </div>

                <div className="grid gap-2">
                   
                    {clientDetailsData && <>
                        <div className="grid md:grid-cols-6 gap-3">
                            <p className="col-span-2 p-2 rounded-lg bg-white dark:bg-white text-gray-600 dark:text-gray-600">
                                {clientDetailsData.TSON_T_ClientName}
                            </p>
                            <p className="col-span-2 p-2 rounded-lg bg-white dark:bg-white text-gray-600 dark:text-gray-600">
                            {clientDetailsData.TSON_T_ClientLastname}
                            </p>
                            <p className="col-span-2 p-2 rounded-lg bg-white dark:bg-white text-gray-600 dark:text-gray-600">
                            {clientDetailsData.TSON_T_ClientPhone}
                            </p>
                        </div>

                        <p className=" p-2 rounded-lg text-gray-600 dark:text-gray-600 bg-white dark:bg-white flex justify-between items-center"
                        > {clientDetailsData.TSON_T_ClientEmail} <button><FiCopy /></button>
                        </p>


                        <div className="grid grid-cols-6 gap-3">
                            <p className="col-span-2 p-2 rounded-lg dark:bg-white bg-white text-gray-600 dark:text-gray-600">
                                {clientDetailsData.TSON_T_ClientBirthday}
                            </p>
                            <p className="col-span-2 p-2 rounded-lg dark:bg-white bg-white text-gray-600 dark:text-gray-600">
                            {clientDetailsData.FK_SON_CAT_ClientSON_InterestSON_First_InterestID}
                            </p>
                            <p className="col-span-2 p-2 rounded-lg dark:bg-white bg-white text-gray-600 dark:text-gray-600">
                            {clientDetailsData.FK_SON_CAT_ClientSON_InterestSON_Second_InterestID}
                            </p>
                        </div>
                    </>

                    }





                </div>
            </div>
        </div>
    )
}

export default DetailsClientModal