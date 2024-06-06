import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteTaskComponent = ({ showDeleteModal, handleDeleteModal }) => {

  function onHandleSave(){
  handleDeleteModal()

  }

  return (
<div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={showDeleteModal} onHide={handleDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete Task</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to delete task?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModal}>Close</Button>
          <Button variant="primary" onClick={onHandleSave}>Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DeleteTaskComponent;
