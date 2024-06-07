import React from "react";
import NavBarComponent from "../components/NavBarComponent";
import Content from "../components/Content";
import AddTaskComponent from "../components/AddTaskComponent";
import { useState } from "react";

const Dashboard = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const handleAddModal = () => setShowAddTask((prev) => !prev);

  return (
    <div>
      <NavBarComponent handleAddModal={handleAddModal} />
      <Content />
      <AddTaskComponent
        showAddModal={showAddTask}
        handleAddModal={handleAddModal}
      />
    </div>
  );
};

export default Dashboard;
