import { Route, Routes } from "react-router-dom"
import AuthNoRequired from "./context/AuthNoRequired"
import AuthRequired from "./context/AuthRequired"
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
        <Route path="/login" element={<AuthNoRequired><Login /></AuthNoRequired>} />
        <Route path="/" element={<AuthRequired><Dashboard /></AuthRequired>} />
        <Route path="/mensajeria" element={<AuthRequired><Mensajeria /></AuthRequired>} />
        <Route path="/formularios" element={<AuthRequired><Formularios /></AuthRequired>} />
        <Route path="/basedatos" element={<AuthRequired><BaseDatos /></AuthRequired>} />
        <Route path="/cuenta" element={<AuthRequired><MiCuenta /></AuthRequired>} />
        <Route path="/configuracion" element={<AuthRequired><Configuracion /></AuthRequired>} />

        <Route path="*" element={<Error404 />} />
      </Routes>

    </>
  )
}

export default App
