import React, { useEffect, useReducer } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import {useSelector } from "react-redux";

const initialStateAddTask = {
  id: 0,
  title: "",
  description: "",
};

function reducerAdd(state, action) {
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "id":
      return { ...state, id: action.payload };
    default:
      return state;
  }
}

const FormComponent = ({ handleAddModal }) => {
  const [state, dispatch] = useReducer(reducerAdd, initialStateAddTask);
  const { taskList } = useSelector((store) => store.taskManage);

  useEffect(() => {
    function setId() {
      dispatch({ type: "id", payload: taskList && taskList.length > 0 ? taskList.length : state.id});
    }

    setId();
  }, [state.title]);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (state.title !== "" || state.description !== "") {
      getData();
    }
    else{
      alert("fill data first")
    }

    function getData() {
      fetch("http://localhost:3000/task/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "task added") {
            alert("Task added successfully");
          } else if (data.message === "task already exists") {
            alert("The task was already found");
           
          }
          handleAddModal(false);
          window.location.reload()
        })
        .catch((e) => console.log(e));
    }
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <fieldset>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={(e) =>
              dispatch({ type: "title", payload: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Description"
            onChange={(e) =>
              dispatch({ type: "description", payload: e.target.value })
            }
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
};

export default FormComponent;
