import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography, Grid, Link} from "@mui/material";
import { register } from "../services/authServices";
import { useGlobalState } from "../utils/StateContext";

    function SignUp(){
        const initialFormState = {
            firstname: "",
            lastname: "",
            email:"",
            password:"",
            comfirmpassword:"",
        };
        
        const [formState, setFormState] = useState(initialFormState);
        const { dispatch } = useGlobalState();
        let navigate = useNavigate();

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
                register(formState).then((data) => {
                  let username = data.username;
                  let token = data.token;
                //   console.log("registered", data);
                // set token in session storage later
                //   sessionStorage.setItem("token", jwt);
                //   sessionStorage.setItem("user", username);
                  dispatch({ type: "setLoggedInUser", data: username });
                  dispatch({ type: "setToken", data: token });
                  navigate("/");
                })
            }

    return (
        <Box sx={{ml: 70, width: 550, height: 550, backgroundColor: '#85C1E9 '}} >
            <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    <h1>Sign Up</h1>
                    <label>First Name:</label><input type="name" name="firstname" value={formState.firstname} onChange={handleChange}></input>
                        <br></br>  <br></br> 
                    <label>Last Name:</label><input type="name" name="lastname" value={formState.lastname} onChange={handleChange}></input>
                        <br></br>  <br></br> 
                    <label>Email:</label><input type="email" name="email" value={formState.username} onChange={handleChange}></input>
                        <br></br>  <br></br> 
                    <label>Password:</label><input type="password" name="password" value={formState.password} onChange={handleChange}></input>
                        <br></br>  <br></br> 
                    <label>Comfirm Password:</label><input type="password" name="comfirmpassword" value={formState.comfirmpassword} onChange={handleChange}></input>
                        <br></br>  <br></br> 
                    <Button variant="contained" onClick={handleSubmit}>Sign up</Button>
                        <br></br> <br></br> 
                    <Grid container spacing={1} columns={8}>
                        <Grid item xs={4}>Already a user?</Grid>
                        <Grid item xs={4}>
                            <Link href="/signin">Sign in</Link>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </Box>
    );
}

export default SignUp;




