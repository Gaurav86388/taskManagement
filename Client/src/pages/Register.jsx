import React, {useReducer} from "react";
  import Button from "react-bootstrap/Button";
  import Form from "react-bootstrap/Form";
  
  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    gap: "20px",
    
  };
  
  const formStyles = {
    border: "1.3px solid grey",
    padding: "10px",
    borderRadius: "5px",
    width: "330px",
    height: "330px",
  };
  const initialState = {
    username: "",
    password: "",
    confirmPassword: ""
}
  function reducer(state, action){

    switch(action.type){
    
        case "username": return {...state, username: action.payload};
        case "password": return {...state, password: action.payload};
        case "confirm password": return {...state, confirmPassword: action.payload};
        default: return state
    }
    }
  
  const Register = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    function handleSubmit(e){



      e.preventDefault()
  
      if(state.password === state.confirmPassword){
          fetch("http://localhost:3000/user/register", {
              method: "POST",
              headers: {
                  'Content-Type': "application/json",         
              },
              body: JSON.stringify(state)
          })
          .then(res=>res.json())
          .then(data=>{
             console.log(data)
              if(data.message === "Registration Successful"){
                  //setRegisterSuccess(true)
                  alert("success")
              }
              
              
          })
          .catch(e=>console.log(e))
      }
  
  
  
  
  }



    return (
      <div className="register" style={containerStyles}>
        <h3 style={{color:"grey"}}>User Registration</h3>
        <Form style={formStyles} onSubmit = {handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={(e)=>dispatch({type: "username", payload: e.target.value})} value={state.username}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" onChange={(e)=>dispatch({type: "password", payload: e.target.value})} value={state.password} />
        </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Enter confirm password" onChange={(e)=>dispatch({type: "confirm password", payload: e.target.value})} value={state.confirmPassword} />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  };
  
  export default Register;
  

