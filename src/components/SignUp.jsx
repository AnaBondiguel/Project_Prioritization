import React, { useState } from "react";
import Button from "@mui/material/Button";

function SignUp(){
    const initialFormState = {
        firstname: "",
        lastname: "",
        email:"",
        password:"",
      };
    
      const [formState, setFormState] = useState(initialFormState);

           //setup onchange for firstname, lastname, email, password
           function handleChange(event) {
            setFormState({
              ...formState,
              [event.target.name]: event.target.value,
            });
          }

            //setup submit button for sign up 
            function handleSubmit(event) {
                event.preventDefault();
            
                }

    return (
        <div>
            <h1>Sign Up</h1>
            <label>First Name:</label><input type="name" name="firstname" value={formState.firstname} onChange={handleChange}></input>
                <br></br> <br></br>
            <label>Last Name:</label><input type="name" name="lastname" value={formState.lastname} onChange={handleChange}></input>
                <br></br> <br></br>
            <label>Email:</label><input type="email" name="email" value={formState.username} onChange={handleChange}></input>
                <br></br> <br></br>
            <label>Password:</label><input type="password" name="password" value={formState.password} onChange={handleChange}></input>
                <br></br> <br></br>
            <Button onClick={handleSubmit}>Sign up</Button>
        </div>
    );
}

export default SignUp;