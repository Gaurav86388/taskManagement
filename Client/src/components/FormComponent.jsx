import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

const FormComponent = ({isUpdate}) => {
  return (
    <Form>
      <fieldset >
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Enter Title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Description" />
      </Form.Group>
      {isUpdate && 
      <Form.Group className="mb-3">
          <Form.Label htmlFor="Select">Status</Form.Label>
          <Form.Select id="Select">
          <option></option>  
            <option>Not Started</option>
            <option>Pending</option>
            <option>Completed</option>
        
          </Form.Select>
        </Form.Group>
        }
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  )
}

export default FormComponent
