import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import SignUp from "../Screens/Signup"
import Login from "../Screens/Login"
import DashboardScreen from "../Screens/Dashboard"
export default function Routting(){
    return<>
    <Router>
        <Routes>
            <Route path="/ " element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<DashboardScreen/>}/>
        </Routes>
    </Router>
    </>
}