import { useContext, useEffect, useState } from "react"
import Layout from "../components/layout/Layout"
import AddFormModal from "../components/modals/Formulario/AddFormModal"
import DetailsFormModal from "../components/modals/Formulario/DetailsFormModal"
import { appContext } from "../context/AppProvider"
import { authContext } from "../context/AuthProvider"


const Formularios = () => {

    const { handleAddFormModalOpen, AddFormModalIsOpen, DetailsFormModalIsOpen, handleDetailsFormModalOpen } = useContext(appContext);
    const { FirebaseGetForms, formsData } = useContext(authContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            setLoading(true);
            FirebaseGetForms();
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [])

    if (loading === true) {
        return <div> </div>
    }

    return (
        <>
            <Layout>
                <section className="dark:bg-[#F0F2F5] bg-[#F0F2F5] w-full relative">
                    <div className="dark:bg-slate-800 bg-slate-800 w-full md:h-96 lg:h-64 py-14">
                        <div className="w-full">
                            <div className="lg:px-16 px-2">
                                <div >
                                    <div className='flex gap-5 mb-5'>
                                        <button
                                            onClick={handleAddFormModalOpen}
                                            className='dark:bg-green-700 bg-green-700 rounded-lg py-2 px-10 text-sm text-white dark:text-white font-bold'
                                        >
                                            Agregar
                                        </button>
                                        {/* <div >
                                            <select name="cars" id="cars" className='w-full p-2 rounded-sm text-sm'>
                                                <option value="0">Sin rango de edad</option>
                                                <option value="18">18 - 30</option>
                                                <option value="31">31 - 40</option>
                                                <option value="41">41 - 50</option>
                                                <option value="51">51 +</option>
                                            </select>
                                        </div>
                                        <div>
                                            <select name="cars" id="cars" className='w-full p-2 rounded-sm text-sm'>
                                                <option value="volvo">Volvo</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </div> */}
                                    </div>
                                    <div className='mb-5'>
                                        <input type="email" placeholder='Buscar' className='p-2 rounded-sm text-sm w-full' />
                                    </div>
                                </div>

                                <div>

                                    {formsData.map(item => <div key={item.PK_TSON_T_FormDocument} className="dark:bg-[#334155] bg-[#334155] p-5 rounded-lg mb-4">
                                        <h2 className="dark:text-white text-white mb-3 font-bold">{item.TSON_T_FormName}</h2>
                                        <div className="grid gap-2 md:flex md:gap-5 ">
                                            <a href={item.TSON_T_FormLink} target="_blanck" className='dark:bg-[#F97316] bg-[#F97316] text-center rounded-lg py-1 px-10 text-sm dark:text-white font-bold text-white'
                                            >Formulario</a>
                                            <a href={item.TSON_T_FormLinkResults} target="_blanck" className='dark:bg-[#EC4899] text-center bg-[#EC4899] rounded-lg py-1 px-10 text-sm dark:text-white font-bold text-white'
                                            >Resultados</a>
                                            <button
                                                onClick={() => handleDetailsFormModalOpen(item.PK_TSON_T_FormDocument)}
                                                className='dark:bg-[#e9ff78] bg-[#e9ff78] rounded-lg py-1 px-10 text-sm dark:text-slate-800 text-slate-800 font-bold'
                                            >
                                                Detalles
                                            </button>
                                        </div>
                                    </div>
                                    )}







                                </div>

                            </div>
                        </div>
                    </div>

                    {AddFormModalIsOpen && <AddFormModal />}
                    {DetailsFormModalIsOpen && <DetailsFormModal />}


                </section>
            </Layout>
        </>
    )
}

export default Formularios