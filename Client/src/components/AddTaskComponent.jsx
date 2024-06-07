import React from "react";
import Modal from "react-bootstrap/Modal";
import FormComponent from "./FormComponent";

const AddTaskComponent = ({ showAddModal, handleAddModal }) => {
  return (
    <Modal show={showAddModal} onHide={handleAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormComponent handleAddModal={handleAddModal}/>
      </Modal.Body>

    </Modal>
  );
};

export default AddTaskComponent;
