import React from "react";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalState } from "../utils/StateContext";
import { getTickets } from "../services/ticketServices";
import { useEffect } from "react";


function MyTickets(){
    let navigate = useNavigate();
    const { store, dispatch } = useGlobalState();
    const { tickets } = store;
    
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
        <div>
            <>
            <Typography>My Tickets</Typography>
            
            {tickets.map((ticket, index) => {
              return (
                
                //when we click the link, it will direct us to ticket detail page
                <Link key={ticket.id} to={`/mytickets/${ticket.id}`}>
                  <Typography>
                    {ticket.initiative}
                    {ticket.description}
                    {ticket.target}
                    {ticket.type}
                    {ticket.priority}
                    {ticket.ICE_Score}
                  </Typography>
                </Link>
              );
              })}
              <button onClick={() => navigate("/mytickets/new")}>Add Ticket</button>
              </>
        </div>
    );
}

export default MyTickets;

