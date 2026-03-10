

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../frontendapp/src/pages/home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/signup";
import NewTask from "./pages/NewTask"
import Dashboard from "./pages/Dashboard"
import UpdateTask from "./pages/UpdateTask"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
    <Route path ="/signin" element ={<SignIn/>}/>
    <Route path ="/signup" element ={<Signup/>}/>
   
    <Route path ="/newtask" element= {<NewTask/>}/>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/update/:id" element={<UpdateTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


