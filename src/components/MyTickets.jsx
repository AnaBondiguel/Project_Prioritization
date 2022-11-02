import React from "react";
import { Typography} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/StateContext";
import { getTickets } from "../services/ticketServices";
import { useEffect } from "react";


function MyTickets(){
    let navigate = useNavigate();
    const { store, dispatch } = useGlobalState();
    const { tickets, loggedInUser } = store;

// Get the list of tickets
    useEffect(() => {
      // console.log("tickets at top:", tickets)
      if(!tickets){
        getTickets() 
        .then(tickets => {
          // console.log("tickets inside:", tickets)
          dispatch ({type: "setTickets", data: tickets})
        })
        .catch((error) => console.log(error));
      }
    }, [dispatch, tickets])
  
    if(!tickets) return "null";

    return (
      //if users log in their account, they can see their tickets, otherwise, please sign in. 
        <div>
          {loggedInUser ? (
              <>
              <Typography>My Tickets</Typography>
              
              {tickets.map((ticket, index) => {
                return (
                //when we click the link, it will direct us to ticket detail page 
                  <Link key={ticket.id} to={`/mytickets/${ticket.id}`}>
                    <Typography>
                      Initative: {ticket.initiative}
                      Description: {ticket.description}
                      Target: {ticket.target}
                      Priority: {ticket.priority}
                      ICE Score: {ticket.ICE_Score}
                    </Typography>
                  </Link> 

                );
                })}
                <button onClick={() => navigate("/newticket")}>Add Ticket</button>
              </>
            ) : (
              <>
                <Typography>Please sign in.</Typography>
              </>
           )}
       
        </div>
    );
}

export default MyTickets;


    

