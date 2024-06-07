import React from "react";
import Modal from "react-bootstrap/Modal";
import UpdateFormComponent from "./UpdateFormComponent";


const UpdateTaskComponent = ({showUpdateModal, handleUpdateButton}) => {

  return (
    <Modal show={showUpdateModal} onHide={handleUpdateButton}>
    <Modal.Header closeButton>
      <Modal.Title>Update Task</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <UpdateFormComponent handleUpdateModal={handleUpdateButton}

      />
    </Modal.Body>
 
  </Modal>
  )
}

export default UpdateTaskComponent
