import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import DeleteTaskComponent from "./DeleteTaskComponent";
import UpdateTaskComponent from "./UpdateTaskComponent";
import { useDispatch} from "react-redux";

import { taskActions } from "../store/taskSlice";
const IndividualTaskComponent = ({ title, status, description, id }) => {

  const dispatch = useDispatch()

  const [showDelete, setShowDelete] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const handleDeleteButton = () => setShowDelete((prev) => {
    
    if(prev === false){

      dispatch(taskActions.deleteTask({id: id}))

    }

    return !prev
  });
  const handleUpdateButton = () => setShowUpdate((prev) => {
    if(prev === false){
      dispatch(taskActions.updateTask({
        title: title,
        description: description,
        status: status,
        id: id
      }))
    }
     
      return !prev
  });

  return (
    <>
      {showDelete && (
        <DeleteTaskComponent
          showDeleteModal={showDelete}
          handleDeleteModal={handleDeleteButton}
        />
      )}
      {showUpdate && (
        <UpdateTaskComponent
          showUpdateModal={showUpdate}
          handleUpdateButton={handleUpdateButton}
        />
      )}
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{status}</td>
        <td>
          <div
            className="action-buttons"
            style={{ display: "flex", gap: "10px" }}
          >
            <Button
              variant="success"
              className="btn-sm"
              onClick={handleUpdateButton}
            >
              Update
            </Button>
            <Button
              variant="danger"
              className="btn-sm"
              onClick={handleDeleteButton}
            >
              Delete
            </Button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default IndividualTaskComponent;
