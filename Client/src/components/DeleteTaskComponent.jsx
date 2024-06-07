import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
const DeleteTaskComponent = ({ showDeleteModal, handleDeleteModal }) => {

  const { deleteTaskId } = useSelector((store) => store.taskManage);

  function onHandleSave(){
    handleDeleteSubmit()
  handleDeleteModal()

  }

  function handleDeleteSubmit() {

    fetch(`http://localhost:3000/task/tasks/${deleteTaskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Task deleted") {
          alert("Task deleted successfully");
        } else if (data.message === "task does not exist") {
          alert("task does not exist");
        }

        handleDeleteModal(false);
        window.location.reload()
      })
      .catch((e) => console.log(e));
  }



  return (

      <Modal show={showDeleteModal} onHide={handleDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete task?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModal}>Close</Button>
          <Button variant="primary" onClick={onHandleSave}>Confirm Delete</Button>
        </Modal.Footer>
      </Modal>
    
  );
};

export default DeleteTaskComponent;
