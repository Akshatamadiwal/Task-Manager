import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  const userId = localStorage.getItem("userId");

  // Redirect if not logged in
  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [userId, navigate]);

  // Fetch tasks
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/tasks/${userId}`
        );
        setTasks(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (userId) {
      fetchTasks();
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/");
  };

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${taskId}`);

      setTasks(tasks.filter((task) => task._id !== taskId));
    } catch (err) {
      console.log(err);
    }
  };

  // ⭐ Toggle Complete
  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(`http://localhost:5000/tasks/${id}`, {
        completed: !completed,
      });

      setTasks(
        tasks.map((task) =>
          task._id === id
            ? { ...task, completed: !completed }
            : task
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="dashboard-container">

      <h1>Dashboard</h1>

      <div className="dashboard-actions">
        <button onClick={() => navigate("/newtask")}>
          Add Task
        </button>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* SEARCH BAR */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <h2>Your Events</h2>

      {tasks.length === 0 ? (
        <p>No events added yet.</p>
      ) : (
        tasks
          .filter((task) =>
            task.description
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((task) => (
            <div
              key={task._id}
              className={`task-card ${task.completed ? "completed" : ""}`}
            >

              <p><b>Description:</b> {task.description}</p>
              <p><b>Category:</b> {task.category}</p>
              <p><b>Date:</b> {task.date}</p>
              <p><b>Time:</b> {task.time}</p>

              <p>
                <b>Important:</b>{" "}
                {task.important ? "Yes " : "No"}
              </p>

              <div className="task-buttons">

                <button
                  onClick={() =>
                    toggleComplete(task._id, task.completed)
                  }
                >
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button
                  onClick={() => handleDelete(task._id)}
                >
                  Delete
                </button>

                <button
                  onClick={() =>
                    navigate(`/update/${task._id}`)
                  }
                >
                  Update
                </button>

              </div>

            </div>
          ))
      )}

    </div>
  );
}

export default Dashboard;