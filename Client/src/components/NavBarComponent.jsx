import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const NavBarComponent = ({handleAddModal}) => {

  return <Navbar className="bg-body-secondary">
  <Container>
    <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
    <Button variant="primary" className='m-2' onClick={handleAddModal}>Add Task</Button>
      <Navbar.Text>
        Signed in as: <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
}

export default NavBarComponent
