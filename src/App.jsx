import { Route, Routes } from "react-router-dom"
import BaseDatos from "./routes/BaseDatos"
import Configuracion from "./routes/Configuracion"
import Dashboard from "./routes/Dashboard"
import Error404 from "./routes/Error404"
import Formularios from "./routes/Formularios"
import Login from "./routes/Login"
import Mensajeria from "./routes/Mensajeria"
import MiCuenta from "./routes/MiCuenta"


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mensajeria" element={<Mensajeria />} />
        <Route path="/formularios" element={<Formularios />} />
        <Route path="/basedatos" element={<BaseDatos />} />
        <Route path="/cuenta" element={<MiCuenta />} />
        <Route path="/configuracion" element={<Configuracion />} />

        <Route path="*" element={<Error404 />} />
      </Routes>

    </>
  )
}

export default App
