import React, {useState} from 'react'

import Button from 'react-bootstrap/Button';
import DeleteTaskComponent from './DeleteTaskComponent';
import UpdateTaskComponent from './UpdateTaskComponent';

const IndividualTaskComponent = ({title, status, description, id}) => {
const [showDelete, setShowDelete] = useState()
const [showUpdate, setShowUpdate] = useState()

const handleDeleteButton = ()=>setShowDelete(prev=>!prev)
const handleUpdateButton = ()=>setShowUpdate(prev=>!prev)



  return (<>
  {showDelete && <DeleteTaskComponent showDeleteModal={showDelete} handleDeleteModal={handleDeleteButton}  />}
  {showUpdate && <UpdateTaskComponent showUpdateModal={showUpdate} handleUpdateButton={handleUpdateButton}/>}
  <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{status}</td>
        <td>
        <div className="action-buttons" style={{display: 'flex', gap:"10px"}}>
          <Button variant="success" className='btn-sm' onClick={handleUpdateButton}>Update</Button>
          <Button variant="danger" className='btn-sm' onClick={handleDeleteButton}>Delete</Button>
          </div>    
        </td>
      </tr>
  </>

    
 
  )
}

export default IndividualTaskComponent


