import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./updatetask.css";

function UpdateTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    description: "",
    category: "",
    date: "",
    time: "",
    important: false,
  });

  // Fetch existing task
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/tasks/task/${id}`
        );
        setTask(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTask();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setTask({
      ...task,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/tasks/${id}`,
        task
      );

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="update-task-container">

      <div className="update-header">
        <h2>Update Task</h2>
      </div>

      <div className="update-form-box">
        <form onSubmit={handleSubmit}>

          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            placeholder="Description"
            required
          />

          <select
            name="category"
            value={task.category}
            onChange={handleChange}
            required
          >
            <option value="">Category</option>
            <option value="fun">Fun</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="other">Other</option>
          </select>

          <input
            type="date"
            name="date"
            value={task.date}
            onChange={handleChange}
          />

          <input
            type="time"
            name="time"
            value={task.time}
            onChange={handleChange}
          />

          <label className="important-box">
            <input
              type="checkbox"
              name="important"
              checked={task.important}
              onChange={handleChange}
            />
            Mark as Important
          </label>

          <button type="submit" className="update-btn">
            Update Task
          </button>

          <button
            type="button"
            className="back-btn"
            onClick={() => navigate(-1)}
          >
            Back
          </button>

        </form>
      </div>

    </div>
  );
}

export default UpdateTask;