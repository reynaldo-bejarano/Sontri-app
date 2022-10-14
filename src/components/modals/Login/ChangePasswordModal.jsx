import { AiFillCloseCircle } from 'react-icons/ai';
import { useContext } from "react";
import { appContext } from '../../../context/AppProvider';
import ChangePasswordForm from '../../forms/Login/ChangePasswordForm';

const ChangePasswordModal = () => {
    const { handleChangePasswordModalIsOpen } = useContext(appContext);

    return (
        <div className="w-full md:w-[500px] 2xl:w-[700px] md:mx-auto bg-[#f0f2f5] 
             absolute top-1/4 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
            <div className="p-5 md:px-10 2xl:p-10 bg-white shadow-lg rounded-lg">
                <div className="flex justify-end mb-5">
                    <button onClick={handleChangePasswordModalIsOpen}>
                        <AiFillCloseCircle className="text-2xl 2xl:text-4xl text-slate-700" />
                    </button>
                </div>
                <ChangePasswordForm />
                <div className="w-full bg-gray-300 h-[1px] mx-auto"></div>
            </div>
        </div>
    )
}

export default ChangePasswordModal