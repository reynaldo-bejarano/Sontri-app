import { AiFillCloseCircle } from 'react-icons/ai';
import { useContext } from "react";
import { appContext } from '../../../context/AppProvider';
import ChangeEmailForm from '../../forms/Cuenta/ChangeEmailForm';

const ChangeEmailModal = () => {
    const { handleChangeEmailModalIsOpen } = useContext(appContext);

    return (


        <div className="w-full md:w-[500px] 2xl:w-[600px] md:mx-auto bg-slate-300 dark:bg-slate-300
             absolute top-1/4 md:top-1/3 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 border-2 border-slate-800 rounded">
            <div className="p-5 md:px-10 2xl:p-5  shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleChangeEmailModalIsOpen}>
                        <AiFillCloseCircle className="text-2xl 2xl:text-4xl text-slate-700 dark:text-slate-700" />
                    </button>
                </div>
                <ChangeEmailForm />
                <div className="w-full bg-gray-300 dark:bg-gray-300 h-[1px] mx-auto"></div>
            </div>
        </div>

    )
}

export default ChangeEmailModal