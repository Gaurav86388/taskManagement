import React, {useEffect } from "react";

import Table from "react-bootstrap/Table";

import IndividualTaskComponent from "./IndividualTaskComponent";

import {useDispatch, useSelector} from "react-redux"
import { taskActions } from "../store/taskSlice";


const contentStyle = {
  marginTop: "50px",
  border: "1px solid black",
  borderRadius: "5px",
};

const Content = () => {

  const {taskList} = useSelector(store=>store.taskManage)
  const dispatch = useDispatch()

  useEffect(() => {
    function getTasks() {
      fetch("http://localhost:3000/task/tasks")
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "success") {
            dispatch(taskActions.getTask({data: data.body}))
          }
        })
        .catch((e) => console.log(e));
    }

    getTasks();
  }, []);

  return (
    <div className="container" style={contentStyle}>
      <Table striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList?.map((item, index) => {
            const { title, description, status, id } = item;

            return (
              <IndividualTaskComponent
                key={index}
                title={title}
                description={description}
                status={status}
                id={id}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Content;

