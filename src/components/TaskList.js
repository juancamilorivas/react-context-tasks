import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

function TaskList() {
  const { tasks, deleteTask, toggleTaskDone } = useContext(GlobalContext);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {tasks.map((task) => (
          <div
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
            key={task.id}
          >
            <div>
              <h1>{task.id}</h1>
              <h6>{task.title}</h6>
              <p>{task.description}</p>

              <button
                className="bg-purple-600 hover:bg-purple-500 py-1 px-4 mt-2"
                onClick={() => toggleTaskDone(task.id)}
              >
                {task.done ? "Done" : "Undone"}
              </button>
            </div>
            <div>
              <Link
                to={`/edit/${task.id}`}
                className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2"
              >
                Edit
              </Link>
              <button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2"
                onClick={() => deleteTask(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
