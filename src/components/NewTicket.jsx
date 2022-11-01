import React, { useState } from "react";
import { Typography, Button} from "@mui/material";
import { useGlobalState } from "../utils/StateContext";
import { useParams, useNavigate } from "react-router-dom";

// import TextField from '@mui/material/TextField';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';



function NewTicket(){
    const initialFormState = {
        initiative: "",
        description: "",
        target_id: 1,
        impact_id: 1,
        confidence_id: 1,
        effort_id: 1,
      };

    const { dispatch, store } = useGlobalState();
    const { targets, impacts, confidences, efforts } = store;
    const [formState, setFormState] = useState(initialFormState);

    let { id } = useParams();
    let navigate = useNavigate();

function handleChange(event) {
    setFormState({
          ...formState,
          [event.target.name]: event.target.value,
        });
      }

function handleClick(event) {
        event.preventDefault();
}

    return (
      
            <div>
                <h1>New Ticket</h1>
                    <Typography>Initiative:</Typography>
                        <input type="text" name="initiative" value={formState.initiative} onChange={handleChange}></input>

                    <Typography>Description:</Typography>
                        <textarea type="text" name="description" value={formState.description} onChange={handleChange}></textarea>

                    <Typography>Target:</Typography>
                        <select name="target_id" value={formState.target_id} onChange={handleChange}>
                            {targets.map((target) => (<option key={target.id} value={target.id}>{target.name}</option>))}
                        </select>

                    <Typography>Impact:</Typography>
                        <select name="impact_id" value={formState.impact_id} onChange={handleChange}>
                            {impacts.map((impact) => (<option key={impact.id} value={impact.id}>{impact.name}</option>))}
                        </select>

                    <Typography>Confidence:</Typography>
                        <select name="confidence_id" value={formState.confidence_id} onChange={handleChange}>
                            {confidences.map((confidence) => (<option key={confidence.id} value={confidence.id}>{confidence.name}</option>))}
                        </select>

                    <Typography>Effort:</Typography>
                        <select name="effort_id" value={formState.effort_id} onChange={handleChange}>
                            {efforts.map((effort) => (<option key={effort.id} value={effort.id}>{effort.name}</option>))}
                        </select>
       

                    <Typography>Due Date:</Typography>
                        <select
                            type="date"
                            name="duedate"
                            value={formState.duedate}
                            onChange={handleChange}
                        ></select>

                    <Typography>Upload files:</Typography>
                        <select
                            type="text"
                            name="uploadfiles"
                            value={formState.uploadfiles}
                            onChange={handleChange}
                        ></select>
 {/* If id is in the url, that means we update the ticket. If id is not in the url, that means we create a new ticket. */}
                    <Button onClick={handleClick}>{id ? "Update" : "Create"}</Button>

</div>
        );
}

export default NewTicket;



  