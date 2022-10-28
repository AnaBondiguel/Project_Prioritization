import React, { useState } from "react";
import Button from "@mui/material/Button";

function SignIn(){
    const initialFormState = {
        email: "",
        password: "",
      };
    
      const [formState, setFormState] = useState(initialFormState);
      //setup onchange for email and password
      function handleChange(event) {
        setFormState({
          ...formState,
          [event.target.name]: event.target.value,
        });
      }
      //setup submit button for sign in 
      function handleSubmit(event) {
        event.preventDefault();
    
          }
     
    return (
        <div>
            <h1>Sign In</h1>
            <label>Email:</label><input type="email" name="email" value={formState.username} onChange={handleChange}></input>
                <br></br> <br></br>
            <label>Password:</label><input type="password" name="password" value={formState.password} onChange={handleChange}></input>
                <br></br> <br></br>
            <Button onClick={handleSubmit}>Sign in</Button>
        </div>
    );
}

export default SignIn;