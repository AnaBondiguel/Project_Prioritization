import { useEffect, useState } from "react";
import { Box, Button, Paper, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTicket, getTicket} from "../services/ticketServices";
import { useGlobalState } from "../utils/StateContext";
import dateFormat from "dateformat";
import iceScoreCalculation from "./ICE_Score";

const TicketDetails = () => {

    const [ticket, setTicket] = useState(null);
    let navigate = useNavigate();
    const { _id } = useParams();
    const { dispatch } = useGlobalState();

//setup onClick for delete button 
    function handleDelete() {
        deleteTicket(_id).then(() => {
          dispatch({ type: "deleteTicket", data: _id });
          navigate('/mytickets');
        //   console.log("hello, ana")
        //   console.log(_id)
          
        });
      }

//when the page is loaded, we can fetch the ticket by its given id. If id is changed, we can fetch the ticket.
    	useEffect(() => {
            // console.log(ticket)
            getTicket(_id)
            .then((ticket) => setTicket(ticket))
            .catch((error) => console.log(error))
	    },[_id])

    console.log("hello")
    console.log(_id)

      if (!ticket) return null;
    return (
        <div>
            <Paper elevation={3}>
            <h1>Ticket Details</h1>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                <h3>{ticket.initialtive}</h3>
                <p>Description: {ticket.description}</p>
                <p>Target: {ticket.target}</p>
                <p>Target Launch: {dateFormat(ticket.dueDate, "ddd, mmm dS, yyyy")}</p>
                </Grid>
            <Grid item xs={8}>
                    <p>Impact: {ticket.impact}</p>
                    <p>Confidence: {ticket.confidence}</p>
                    <p>Effort: {ticket.effort}</p>
                    <p>
                    ICE Score:
                        {iceScoreCalculation(
                            ticket.impact,
                            ticket.confidence,
                            ticket.effort
                        )}
                    </p>
                    <p>Priority: {ticket.priorityValue}</p> 
                </Grid>
                </Grid>
        
            <Box>
                <Button onClick={() => navigate(`/mytickets/update/${_id}`, { state: ticket })}>Edit</Button>
                <Button onClick={handleDelete}>Delete</Button>
            </Box>


            </Paper>
        </div>
    );
}

export default TicketDetails;