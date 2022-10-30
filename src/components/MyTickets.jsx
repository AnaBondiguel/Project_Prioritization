import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGlobalState } from "../utils/StateContext";


function MyTickets(){
    const { store } = useGlobalState();
    const { tickets } = store;
    if(!tickets) return "null";

    return (
        <div>
            <Typography>My Tickets</Typography>
            
          {tickets.map((ticket, index) => {
            return (
              <Link key={ticket.id} to={`/Mytickets/${ticket.id}`}>
                <Typography>{ticket.initiative}</Typography>
                <Typography>{ticket.description}</Typography>
                <Typography>{ticket.target}</Typography>
                <Typography>{ticket.type}</Typography>
                <Typography>{ticket.priority}</Typography>
                <Typography>{ticket.ICE_Score}</Typography>
              </Link>
            )}
        )}
        </div>
    );
}

export default MyTickets;

