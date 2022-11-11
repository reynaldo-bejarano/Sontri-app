import { FiCopy } from 'react-icons/fi';


const CopyButton = ({ link, color = "text-slate-800" }) => {
    return (
        <button onClick={() => { navigator.clipboard.writeText(link) }}><FiCopy className={`${color} hover:text-red-500 dark:${color}`} /></button>
    )
}

export default CopyButton