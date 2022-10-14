import Layout from "../components/layout/Layout"
import { FiUsers } from 'react-icons/fi';
import { AiOutlineMessage } from 'react-icons/ai';
import { FaWpforms } from 'react-icons/fa';
import { BiTimeFive } from 'react-icons/bi';

import { AiOutlineArrowUp } from 'react-icons/ai';




const Dashboard = () => {
  return (
    <>
      <Layout>
        <section className="bg-[#F0F2F5] w-full relative">
          <div className="bg-slate-800 w-full h-64 "></div>
          <div className="absolute top-10 w-full">
            <div className="p-5 grid grid-cols-4 gap-10">


              {/* primero */}
              <div className="bg-white px-5 py-2 rounded-md">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h1 className="text-xs text-gray-500 font-bold">Nuevos clientes</h1>
                    <h1 className="font-bold text-2xl text-slate-800">521.458</h1>
                  </div>
                  <div className="p-2 bg-[#ef4444] rounded-full">
                    <FiUsers className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowUp className="text-green-400 text-lg font-bold" />
                  <p className="text-green-400 font-bold">3.14%</p>
                  <p className="text-xs text-gray-500 font-bold">Último mes</p>
                </div>
              </div>

               {/* segundo */}
               <div className="bg-white px-5 py-2 rounded-md">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h1 className="text-xs text-gray-500 font-bold">Mensajes enviados</h1>
                    <h1 className="font-bold text-2xl text-slate-800">80.000</h1>
                  </div>
                  <div className="p-2 bg-[#f97316] rounded-full">
                    <AiOutlineMessage className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowUp className="text-green-400 text-lg font-bold" />
                  <p className="text-green-400 font-bold">15.14%</p>
                  <p className="text-xs text-gray-500 font-bold">Último mes</p>
                </div>
              </div>

               {/* tercero */}
               <div className="bg-white px-5 py-2 rounded-md">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h1 className="text-xs text-gray-500 font-bold">Formularios</h1>
                    <h1 className="font-bold text-2xl text-slate-800">356</h1>
                  </div>
                  <div className="p-2 bg-[#ec4899] rounded-full">
                    <FaWpforms className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowUp className="text-green-400 text-lg font-bold" />
                  <p className="text-green-400 font-bold">10.14%</p>
                  <p className="text-xs text-gray-500 font-bold">Último mes</p>
                </div>
              </div>

               {/* cuarto */}
               <div className="bg-white px-5 py-2 rounded-md">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h1 className="text-xs text-gray-500 font-bold">Tiempo de uso</h1>
                    <h1 className="font-bold text-2xl text-slate-800">2h 30min</h1>
                  </div>
                  <div className="p-2 bg-[#0ea5e9] rounded-full">
                    <BiTimeFive className="text-white text-2xl" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <AiOutlineArrowUp className="text-green-400 text-lg font-bold" />
                  <p className="text-green-400 font-bold">31.14%</p>
                  <p className="text-xs text-gray-500 font-bold">Último mes</p>
                </div>
              </div>




            </div>
          </div>
        </section>
      </Layout>
    </>

  )
}

export default Dashboard