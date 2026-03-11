import React, { useState } from "react";
import IconDatePicker from "./dateinput";
import TimeInput from "./timeinput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./newtask.css";

function Newtask() {
    const navigate = useNavigate();
  const [task, setTask] = useState({
    description: "",
    category: "",
    date: null,
    time: "",
    important: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

const userId = localStorage.getItem("userId");

     await axios.post("https://task-manager-zmqj.onrender.com/tasks", {
    ...task,
    user: userId,
  });

  alert("Task added");
};
  return (
    <div className="add-task">
      <div className="new-task" style={{ backgroundColor: "darkblue", color: "white" }}>
        <h1>New Task</h1>
      </div>

      <div className="form-box">
        <form onSubmit={handleSubmit}>
          
         <textarea
  placeholder="Add a description"
  required
  value={task.description}
  onChange={(e) =>
    setTask({ ...task, description: e.target.value })
  }
/>


          <select
            required
           value={task.category}
            onChange={(e) => setTask({ ...task, category: e.target.value })}
          >
            <option value="" disabled hidden>Category</option>
            <option value="fun">fun</option>
            <option value="work">work</option>
            <option value="study">study</option>
            <option value="other">other</option>
          </select>

          <IconDatePicker
           value={task.date}
           onChange={(date) => setTask({ ...task, date })}
          />


          <TimeInput
            value={task.time}
            onChange={(time) => setTask({ ...task, time })}
          />

          <div className="input-box">
            <input type="text" placeholder="Important?" disabled />
            <input
              type="checkbox"
              onChange={(e) => setTask({ ...task, important: e.target.checked })}
            />
          </div>

          <button type="submit">Add Task</button>
          <button onClick={() => navigate(-1)}>Back</button>
        </form>
      </div>
    </div>
  );
}

export default Newtask;
