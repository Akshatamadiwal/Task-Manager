import React from "react";
import Navbar from "./navbar";
import "./home.css";
import taskImage from "../assets/task.jpg";
import taskimg from "../assets/taskbig.png";
import DateTime from './date';
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      
      <Navbar/>
      <div className="np "><DateTime/></div>
      <div className="home">
        
        <div className="home-left">
          <h1>Manage Your Tasks Smartly</h1>

          <p>
            Stay organized and boost productivity with our simple and powerful
            task manager. Track your work, set deadlines and stay focused.
          </p>

          <div className="home-buttons">
           <button
  onClick={() => navigate("/signin")}
  className="btn-primary"
>
  Start Managing Tasks
</button>

            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        <div className="home-right">
          <img src={taskimg} alt="task" />
        </div>

      </div>
    </div>
  );
};

export default Home;
