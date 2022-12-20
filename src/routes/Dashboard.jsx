import Layout from "../components/layout/Layout"
import { FiUsers } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';

import { AiOutlineArrowUp } from 'react-icons/ai';
import { useEffect } from "react";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import LineChart from "../components/charts/LineChart";
import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import PolarChart from "../components/charts/PolarChart";



const Dashboard = () => {

  const { FirebaseGetClients, FirebaseGetForms, FirebaseGetMessages, FirebaseGetInterests, clientsData, formsData, messageData, interestData } = useContext(authContext);


  useEffect(() => {
    try {
      FirebaseGetClients();
      FirebaseGetForms();
      FirebaseGetMessages();
      FirebaseGetInterests();
    } catch (error) {
      console.log(error.message)
    }

  }, []);




  return (
    <>
      <Layout>

        <section className="dark:bg-[#F0F2F5] bg-[#F0F2F5] w-full relative">
          <div className="dark:bg-slate-800 bg-slate-800 w-full md:h-96 lg:h-64 py-14">
            <div className="w-full">
              <div className="p-5 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* primero */}
                <div className="dark:bg-white bg-white px-5 py-2 rounded-md">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h1 className="text-xs dark:text-gray-500 text-gray-500 font-bold">Clientes registrados</h1>
                      <h1 className="font-bold text-2xl dark:text-slate-800 text-slate-800">{clientsData ? clientsData.length : 0}</h1>
                    </div>
                    <div className="p-2 dark:bg-[#ef4444] bg-[#ef4444] rounded-full">
                      <FiUsers className="dark:text-white text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineArrowUp className="dark:text-green-400 text-green-400 text-lg font-bold" />
                    <p className="dark:text-green-400 text-green-400 font-bold">0%</p>
                    <p className="text-xs dark:text-gray-500 text-gray-500 font-bold">Último mes</p>
                  </div>
                </div>

                {/* segundo */}
                <div className="dark:bg-white bg-white px-5 py-2 rounded-md">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h1 className="text-xs dark:text-gray-500 text-gray-500 font-bold">Mensajes enviados</h1>
                      <h1 className="font-bold text-2xl text-slate-800 dark:text-slate-800">{messageData ? messageData.length : 0}</h1>
                    </div>
                    <div className="p-2 dark:bg-[#f97316] bg-[#f97316] rounded-full">
                      <AiOutlineMessage className="dark:text-white text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineArrowUp className="dark:text-green-400 text-green-400 text-lg font-bold" />
                    <p className="dark:text-green-400 text-green-400 font-bold">0%</p>
                    <p className="text-xs dark:text-gray-500 text-gray-500 font-bold">Último mes</p>
                  </div>
                </div>

                {/* tercero */}
                <div className="dark:bg-white bg-white px-5 py-2 rounded-md">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h1 className="text-xs dark:text-gray-500 text-gray-500 font-bold">Formularios</h1>
                      <h1 className="font-bold text-2xl dark:text-slate-800 text-slate-800">{formsData ? formsData.length : 0}</h1>
                    </div>
                    <div className="p-2 dark:bg-[#ec4899] bg-[#ec4899] rounded-full">
                      <FaWpforms className="dark:text-white text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineArrowUp className="dark:text-green-400 text-green-400 text-lg font-bold" />
                    <p className="dark:text-green-400 text-green-400 font-bold">0%</p>
                    <p className="text-xs dark:text-gray-500 text-gray-500 font-bold">Último mes</p>
                  </div>
                </div>

                {/* cuarto */}
                <div className="dark:bg-white bg-white px-5 py-2 rounded-md">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <h1 className="text-xs dark:text-gray-500 text-gray-500 font-bold">Intereses agregados</h1>
                      <h1 className="font-bold text-2xl dark:text-slate-800 text-slate-800">{interestData ? interestData.length : 0}</h1>
                    </div>
                    <div className="p-2 dark:bg-[#0ea5e9] bg-[#0ea5e9] rounded-full">
                      <BiTimeFive className="dark:text-white text-white text-2xl" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AiOutlineArrowUp className="dark:text-green-400 text-green-400 text-lg font-bold" />
                    <p className="dark:text-green-400 text-green-400 font-bold">0%</p>
                    <p className="text-xs dark:text-gray-500 text-gray-500 font-bold">Último mes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="w-full ">
            <div className="grid md:grid-cols-2 gap-10 w-full p-5 relative -top-14">
              <div className="dark:bg-[#334155] bg-[#334155] w-full h-80 rounded-lg">
                <p className="text-center text-white p-5">Clientes registrados por mes</p>
                <LineChart />
              </div>
              <div className="dark:bg-[#334155] bg-[#334155] w-full h-80 rounded-lg">
                <p className="text-center text-white p-5">Cantidad de formularios enviados por interés</p>
                <BarChart />
              </div>
            </div>
          </div>

          <div className="w-full pb-20">
            <div className="grid md:grid-cols-2 gap-10 w-full p-5 relative -top-14">

              <div className="dark:bg-[#334155] bg-[#334155] w-full h-96 rounded-lg grid justify-center items-center">
                <p className="text-center text-white p-5">Mensajes enviados por mes</p>
                <PieChart />
              </div>
              <div className="dark:bg-[#334155] bg-[#334155] w-full h-96 rounded-lg grid justify-center">
                <p className="text-center text-white p-5">Tiempo de uso por mes</p>
                <PolarChart />
              </div>
            </div>
          </div>


        </section>
      </Layout>
    </>

  )
}

export default Dashboard