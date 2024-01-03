import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import SignUp from "./component/SignUp"
import Navbar from "./component/Navbar"
import Login from "./component/Login"

function App() {

  return (
    <BrowserRouter>
    <Navbar path="/"/>
      <Routes> 
         <Route path="/register" element={<SignUp/>}/>
         <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
