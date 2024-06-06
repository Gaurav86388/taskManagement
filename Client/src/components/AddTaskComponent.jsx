import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormComponent from "./FormComponent";

const AddTaskComponent = ({ showAddModal, handleAddModal }) => {
  return (
    <Modal show={showAddModal} onHide={handleAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormComponent />
      </Modal.Body>

    </Modal>
  );
};

export default AddTaskComponent;
