import React, {useState} from 'react'

import Table from 'react-bootstrap/Table';

import IndividualTaskComponent from './IndividualTaskComponent';

const contentStyle={
marginTop: "50px", 
border: "1px solid black",
borderRadius: "5px"
}


const Content = () => {

 

  return ( <div className="container" style={contentStyle}> 
  
  <Table striped >
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
    {dummyData.map((item, index)=>{

      const {title, description, status} = item

      return <IndividualTaskComponent key={index} title={title} description={description} status={status} id={index}/>
    })}
       </tbody>
       </Table>
  
  </div>
    
  )
}

export default Content


const dummyData = [
  {
    title: "Product A",
    description: "This is a dummy description for Product A.",
    status: "In stock"
  },
  {
    title: "Service B",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: "Out of stock"
  },
  {
    title: "Widget X",
    description: "A versatile widget designed for various tasks.",
    status: "Available"
  },
  {
    title: "Solution Y",
    description: "This solution provides an innovative approach to common problems.",
    status: "Limited stock"
  },
  {
    title: "App Z",
    description: "An intuitive application for streamlining workflow processes.",
    status: "Pre-order"
  },
  {
    title: "Tool Alpha",
    description: "Simplify your tasks with this powerful tool.",
    status: "Backordered"
  },
  {
    title: "Resource Beta",
    description: "Access a wealth of information with this comprehensive resource.",
    status: "Discontinued"
  },
  {
    title: "Book Gamma",
    description: "Dive into a world of knowledge with this captivating book.",
    status: "Coming soon"
  },
  {
    title: "Gadget Delta",
    description: "Experience the latest technology with this sleek gadget.",
    status: "Sold out"
  },
  {
    title: "Module Epsilon",
    description: "Enhance your system capabilities with this modular component.",
    status: "On hold"
  }
];


