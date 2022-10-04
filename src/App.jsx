import { Route, Routes } from "react-router-dom"
import Dashboard from "./routes/Dashboard"
import Error404 from "./routes/Error404"
import Login from "./routes/Login"
import PasswordChange from "./routes/PasswordChange"
import PasswordRecovery from "./routes/PasswordRecovery"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/password-change" element={<PasswordChange />} />

        <Route path="*" element={<Error404 />} />
      </Routes>

    </>
  )
}

export default App
