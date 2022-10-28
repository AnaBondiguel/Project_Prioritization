import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import  Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
    let initialData = {
        projects: [],
        userInput: "",
      };
    
      const [data, setData] = useState(initialData);

      let navigate = useNavigate();

      //setup OnChange for search bar 
      function handleOnChange(event) {
        setData({
          ...data,
          userInput: event.target.value,
        });
      }

    //   useEffect(
    //     () => {
    //       function fetchTickets() {
    //         const url = "";
    //         fetch(url)
    //           .then((result) => {
    //             return result.json();
    //           })
    //           .then((data) => {
    //             const tickets = data // array
    //               .map((ticket) => ({
    //                 initiative: ticket.initiative,
    //                 submitted_date: ticket.submitted_date,
    //                 description: ticket.description,
    //                 type: ticket.type,
    //                 target: ticket.target,
    //                 target: ticket.ICEscore,
    //               }));
    //             setData({
    //               ...data,
    //               tickets: tickets,
    //             });
    //           })
    //           .catch((error) => {
    //             console.log("Error!", error);
    //           })
    //           .finally(() => {
    //             console.log("Fetch completed.");
    //           });
    //       }
    
    //       fetchTickets();
    //     },
    //     // only run on component did mount
    //     []
    //   );

    return (
        <header>
          <Grid container spacing={3}>
                <Grid item xs>
                    <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGO1uzGzmVB-A/company-logo_200_200/0/1656630677571?e=1674691200&v=beta&t=tluNdfouY9QZ-2Yq10r9V1_Lk9KteBfrkcttzlngA0A" width="50" height="50" alt="logo"/>
                </Grid>
                <Grid item xs={6}>
                    <label>Search: </label><input type="text" onChange={handleOnChange}></input>
                </Grid>
                <Grid item xs>
                     <Button onClick={() => navigate("/Signin")}>Sign in</Button>
                     <Button onClick={() => navigate("/Signup")}>Sign up</Button>
                </Grid>
            </Grid>
        </header>
    )
}

export default Header;
