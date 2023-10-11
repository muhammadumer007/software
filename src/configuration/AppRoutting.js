import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import SignUp from "../Screens/Signup"
import Login from "../Screens/Login"


import DashboardPage from "../Screens/institues/Dashboard"
export default function Routting(){
    return<>
    <Router>
        <Routes>
            <Route path="/ " element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
                <Route path="/Dashboardpage" element={< DashboardPage/>}/>
        </Routes>
    </Router>
    </>
}