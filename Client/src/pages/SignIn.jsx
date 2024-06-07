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
  height: "235px",
};

const initialState = {
    username: "",
    password: ""
}

function reducer(state, action){

switch(action.type){

    case "username": return {...state, username: action.payload};
    case "password": return {...state, password: action.payload};
    default: return state
}
}
const SignIn = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    


function handleSubmit(e){
    e.preventDefault()

    fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
            'Content-Type': "application/json",         
        },
        body: JSON.stringify(state)
    })
    .then(res=>res.json())
    .then(data=>{
  
        if(data.message === "Incorrect Password"){
            alert("wrong password")
        }
        else if (data.message=== "user not found"){
            alert("user not found")
        }
        else{
            // dispatch(todoActions.addUserName({name: data.name}))
            const token = data.token
            localStorage.setItem("jwt", token)
            // setSigninSuccess(true)
            console.log(token)
        }

    })
    .catch(e=>console.log(e))
}



  return (
    <div className="signIn" style={containerStyles}>
      <h3 style={{color:"grey"}}>User Login</h3>
      <Form style={formStyles} onSubmit = {handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" onChange={(e)=>dispatch({type: "username", payload: e.target.value})} value={state.username}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter password" onChange={(e)=>dispatch({type: "password", payload: e.target.value})} value={state.password} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
