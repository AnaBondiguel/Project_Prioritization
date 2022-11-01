import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTicket, getTicket } from "../services/ticketServices";
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
          navigate(-1);
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
            <h1>Ticket Details</h1>
                <h3>{ticket.initiative}</h3>
                <p>Submited Data: {ticket.posted}</p>
                <p>{ticket.description}</p>
                <p>Username: {ticket.username}</p>
                <p>Target: {ticket.target}</p>
                <p>Type: {ticket.type}</p>
                <p>Impact: {ticket.impact}</p>
                <p>Confidence: {ticket.confidence}</p>
                <p>Effort: {ticket.effort}</p>
                <p>Due Date: {ticket.duedate}</p>
                <p>Priority: {ticket.priority}</p>
                <p>ICE Score: {ticket.ICE_Score}</p>
                <p>Feedback: {ticket.feedback}</p>

        <Box>
            <Button onClick={() => navigate(`/mytickets/update/${id}`)}>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
       </Box>

        </div>
    );
}

export default TicketDetails;