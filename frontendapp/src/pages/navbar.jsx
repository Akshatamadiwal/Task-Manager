import React from 'react'
import { Link } from 'react-router-dom';
import image from '../assets/task.jpg';
import userimage from '../assets/userimage.png';
import DateTime from './date';
import './navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    
    <br></br>
      <div className="navbar-brand title-center"><h1 style={{textAlign:"center"}}> Task Manager</h1></div>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
       
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
     
     
           <li className="nav-item mx-3 "  style={{backgroundColor:"rgb(56, 122, 188)",borderRadius:"40px", height:"50px", width:"80px", textAlign:"center"}}>
          <Link className="nav-link active" to="/signup">signup</Link>
      </li>
        <li className="nav-item mx-3 "   style={{backgroundColor:"rgb(56, 122, 188)",borderRadius:"40px", height:"50px", width:"80px", textAlign:"center"}}>
          <Link className="nav-link active" to="/signin">signin</Link>
        </li>
        <li className="nav-item ">
         
        </li>
     
      </ul>
    
    </div>
  </div>
</nav>
 
    </div>
  );
}

export default Navbar;
