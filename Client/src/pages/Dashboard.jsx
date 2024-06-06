import React from 'react'
import NavBarComponent from '../components/NavBarComponent'
import Content from '../components/Content';
import AddTaskComponent from '../components/AddTaskComponent';
import { useState } from 'react';
import DeleteTaskComponent from '../components/DeleteTaskComponent';

const Dashboard = () => {

    
  const [showAddTask, setShowAddTask] = useState(false);

  const handleAddModal = () => setShowAddTask(prev=>!prev);


  return (
    <div>
      <NavBarComponent handleAddModal={handleAddModal}/>
      <Content />
      <AddTaskComponent showAddModal = {showAddTask} handleAddModal={handleAddModal}/>
      <DeleteTaskComponent />
    </div>
  )
}

export default Dashboard
