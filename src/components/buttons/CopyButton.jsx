import { FiCopy } from 'react-icons/fi';
import { toast } from 'react-toastify';


const CopyButton = ({ link, title, color = "text-slate-800" }) => {

    const notify = (message) => toast.info(message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });;

    const handleCopy = () => {
        navigator.clipboard.writeText(link);
        notify(title);
    }
    return (
        <button onClick={handleCopy}><FiCopy className={`${color} hover:text-red-500 dark:${color}`} /></button>
    )
}

export default CopyButton