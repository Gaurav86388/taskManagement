import React, { useReducer } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

function reducerUpdate(state, action) {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "status":
      return { ...state, status: action.payload };
    default:
      return state;
  }
}

const UpdateFormComponent = ({ handleUpdateModal }) => {

  const { currentUpdateTask } = useSelector((store) => store.taskManage);

  const initialStateUpdateTask = {
    id: currentUpdateTask.id,
    title: currentUpdateTask.title,
    description: currentUpdateTask.description,
    status: currentUpdateTask.status,
  };
  const [state, dispatch] = useReducer(reducerUpdate, initialStateUpdateTask);
console.log(state)
  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/task/tasks/${state.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "task value updated") {
          alert("Task updated successfully");
        } else if (data.message === "task already exists") {
          alert("task does not exist");
        }

        handleUpdateModal(false);
        window.location.reload()
      })
      .catch((e) => console.log(e));
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <fieldset>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "title", payload: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={state.description}
            onChange={(e) =>
              dispatch({ type: "description", payload: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Status</Form.Label>
          <Form.Select
            id="Select"
            onChange={(e) =>
              dispatch({ type: "status", payload: e.target.value })
            }
            value = {state.status}
          >
            <option></option>
            <option>Not Started</option>
            <option>Pending</option>
            <option>Completed</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
};

export default UpdateFormComponent;
