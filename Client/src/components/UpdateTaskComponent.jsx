import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormComponent from "./FormComponent";


const UpdateTaskComponent = ({showUpdateModal, handleUpdateButton}) => {
  return (
    <Modal show={showUpdateModal} onHide={handleUpdateButton}>
    <Modal.Header closeButton>
      <Modal.Title>Update Task</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <FormComponent isUpdate={true}/>
    </Modal.Body>
 
  </Modal>
  )
}

export default UpdateTaskComponent
