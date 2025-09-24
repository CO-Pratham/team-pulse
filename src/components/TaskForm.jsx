import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slice/memberSlice";

const TaskForm = ({ member }) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim() === "") return;
    dispatch(addTask({ id: member.id, task }));
    setTask("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TaskForm;
