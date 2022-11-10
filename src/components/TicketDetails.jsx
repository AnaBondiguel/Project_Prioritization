import { useEffect, useState } from "react";
import { Box, Button,Typography, Paper, Grid } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTicket, getTicket, updateTicket } from "../services/ticketServices";
import { useGlobalState } from "../utils/StateContext";
  
const TicketDetails = () => {
  
    const [ticket, setTicket] = useState(null);
    let navigate = useNavigate();
    const { id } = useParams();
    const { dispatch } = useGlobalState();



//setup onClick for delete button 
    function handleDelete() {
        deleteTicket(id).then(() => {
          dispatch({ type: "deleteTicket", data: id });
          navigate('/mytickets');
        });
      }
//when the page is loaded, we can fetch the ticket by its given id. If id is changed, we can fetch the ticket.
	useEffect(() => {
		getTicket(id)
		.then((ticket) => setTicket(ticket))
		.catch((error) => console.log(error))
	},[id])

    if (!ticket) return null;

    return (
        <div>
            <Paper elevation={3}>
            <h1>Ticket Details</h1>
            <Grid container spacing={2} columns={16}>
                <Grid item xs={8}>
                <h3>{ticket.initiative}</h3>
                <p>Description: {ticket.description}</p>
                <p>Target: {ticket.target}</p>
                <p>Due Date: {ticket.dueDate}</p>
                </Grid>
            <Grid item xs={8}>
                <p>Impact: {ticket.impact}</p>
                <p>Confidence: {ticket.confidence}</p>
                <p>Effort: {ticket.effort}</p>
                <p>ICE Score: {ticket.ICE_Score}</p>
                <p>Priority: {ticket.priority}</p>
                <p>Feedback: {ticket.feedback}</p>
                </Grid>
                </Grid>

            <Box>
                {/* {!id ? (
                    <> */}
                        <Button onClick={() => navigate(`/mytickets/update/${id}`, { state: ticket })}>Edit</Button>
                        <Button onClick={handleDelete}>Delete</Button>
                    {/* </>
                    ) : (
                    <>
                         <Typography>You have already submitted the ticket!</Typography>
                    </>
                )} */}
            </Box>
            </Paper>
        </div>
    );
}

export default TicketDetails;