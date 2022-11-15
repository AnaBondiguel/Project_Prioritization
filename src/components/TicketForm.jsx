import React, { useState, useEffect } from "react";
import { Grid, Typography, Button, Paper, NativeSelect } from "@mui/material";
import { useGlobalState } from "../utils/StateContext";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  createTicket,
  updateTicket,
  getTicket,
} from "../services/ticketServices";
import FileBase from "react-file-base64";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { v4 as uuidv4 } from 'uuid';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";


/**
 * TicketForm is also used for the edit page
 * How it works is that coming from the TicketDetails page, we're sending
 * the same data to this component. The way to access the data that we sent
 * is via `useLocation()` hook.
 * e.g.
 * in TicketDetails.jsx
 * const navigate = useNavigate() // this is how to send data
 * <button onClick={navigate(`/mytickets/update/${id}`, { state }) />
 *
 * in TicketForm.jsx
 * const location = useLocation() // this is how to receive data
 * const [formState, setFormState] = useState(initialState)
 * useEffect(() => {
 *    setFormState(location.state)
 * }, [location.state])
 */
function TicketForm(props) {
  const location = useLocation();
  // console.log(location.state);
  const initialFormState = {
    initialtive: "",
    description: "",
    target: "",
    dueDate: "",
    impact: "",
    confidence: "",
    effort: "",
    // selectedFile: "",
    feedback: "",
    // isSubmitted: false,
  };
  // const {
  //     enableInitiative = false,
  //     enableDescription = true,
  //     enableTargetId = true,
  //     enableImpactId = true,
  //     enableConfidenceId = true,
  //     enableEffortId = true,
  //     enableSelectedFile = true,
  // } = props;
 
  const [formState, setFormState] = useState(initialFormState);
  const { dispatch, store } = useGlobalState();
  const { targets, impacts, confidences, efforts } = store;
  const [dateValue, setDateValue] = React.useState(null); //for date picker
  // const [selectedDate, setSelectedDate] = React.useState(null);

  let { _id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    // /tickets/new
    // location.state = undefined
    // setFormState(undefined)
    //setFormState(location.state)

    // state = initialFormState
    setFormState((state) => {
      console.log(formState.dueDate)
      return {
        ...state, // this is the initialFormState
        ...location.state, // this is the ticket details
      };
    });
    
  }, [location.state]);


  function handleChange(event) {
    // console.log("Event is: " + JSON.stringify(event))
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }

  // <button onClick={handleClick()}>Save</button>
  // <button onClick={handleClick({ isSubmitted: true })}>Submit</button>
  // updateTicket -> PUT /api/tickets
  // createTicket -> POST /api/tickets
  function handleClick({ isSubmitted = false }) {
    console.log(_id)
    return (event) => {
      event.preventDefault();
      //if statement to handle update ticket and create ticket
      console.log(_id)
      if (_id) {
        // from saved ticket to submitted
        updateTicket({ id: _id, ...formState, isSubmitted: isSubmitted })
          .then(() => {
            dispatch({
              type: "updateTicket",
              data: { id: _id, ...formState, isSubmitted: isSubmitted },
            });
            //if user update ticket with form, leave ticket to show on the page.
            navigate(`/mytickets/${_id}`);
          })
          .catch((error) => console.log(error));

      } else {
        // from creation to submitted
         createTicket({ ...formState, ticket_id: uuidv4(), isSubmitted: isSubmitted })
          .then((ticket) => {
            dispatch({ type: "addTicket", data: ticket });
            //we can navigate back to the my tickets page once we create a ticket.
            isSubmitted ? navigate('/submissionsuccess') : navigate("/mytickets");
            console.log(ticket)
          })
          .catch((error) => console.log(error));
      }
    };
  }

  return (
    <Paper elevation={3}>
      <Typography variant="h4" align="left">
        New Ticket
      </Typography>
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <form>
            <Typography>Initiative:</Typography>
            <input
              type="text"
              name="initialtive"
              value={formState.initialtive}
              onChange={handleChange}
            ></input>

            <Typography>Description:</Typography>
            <textarea
              type="text"
              name="description"
              value={formState.description}
              onChange={handleChange}
            ></textarea>

            <Typography>Target:</Typography>
            <NativeSelect
              name="target"
              value={formState.target}
              onChange={handleChange}
            >
              {targets.map((target) => (
                <option key={target.name} value={target.name}>
                  {target.name}
                </option>
              ))}
            </NativeSelect>

            {/* <Typography>Target Launch</Typography>
            <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
            /> */}
            {/* <Typography>Target Launch :</Typography>
            <NativeSelect
              name="dueDate"
              value={formState.dueDate}
              onChange={handleChange}
            >
                {dueDate.map((date) => (
                <option key={date.name} value={date.name}>
                  {date.name}
                </option>
              ))}
            </NativeSelect> */}

     {/* <Typography>Target Launch :</Typography>
            <NativeSelect
              name="dueDate"
              value={formState.dueDate}
              onChange={handleChange}
            >
                {dueDate.map((date) => (
                <option key={date.name} value={date.name}>
                  {date.name}
                </option>
              ))}
            </NativeSelect> */}
<br></br> <br></br>
          <Typography>Due Date</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Due date"
                name="dueDate"
                value={dateValue}
                // onChange={handleChange}
                onChange={(newValue) => {
                  // handleChange({
                  //    target: {
                  //     name: 'dueDate',
                  //     value: newValue.toLocaleString()
                  //    }

                  // })
                  setDateValue(newValue);
                  console.log("new date: " + newValue)
                }}
                
                renderInput={(params) => 
                <TextField {...params} 
                label="Due date"
                name="dueDate"
                value={dateValue}
                onChange={handleChange}
                />}
              />
            
            </LocalizationProvider> 
            

            {/* <Typography>Upload files:</Typography>
            <input
              type="text"
              name="uselectedFile"
              value={formState.selectedFile}
              onChange={handleChange}
            ></input>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setFormState({ ...formState, selectedFile: base64 })
              }
            /> */}
          </form>
        </Grid>

        <Grid item xs={8}>
          <form>
            <Typography>Impact:</Typography>
            <NativeSelect
              name="impact"
              value={formState.impact}
              onChange={handleChange}
            >
              {impacts.map((impact) => (
                <option key={impact.name} value={impact.name}>
                  {impact.name}
                </option>
              ))}
            </NativeSelect>

            <Typography>Confidence:</Typography>
            <NativeSelect
              name="confidence"
              value={formState.confidence}
              onChange={handleChange}
            >
              {confidences.map((confidence) => (
                <option key={confidence.name} value={confidence.name}>
                  {confidence.name}
                </option>
              ))}
            </NativeSelect>

            <Typography>Effort:</Typography>
            <NativeSelect
              name="effort"
              value={formState.effort}
              onChange={handleChange}
            >
              {efforts.map((effort) => (
                <option key={effort.name} value={effort.name}>
                  {effort.name}
                </option>
              ))}
            </NativeSelect>

            <Typography>Feedback:</Typography>
            <textarea
              type="text"
              name="feedback"
              value={formState.feedback}
              onChange={handleChange}
            ></textarea>
          </form>
        </Grid>
      </Grid>
      <br></br> <br></br> {/** search for mui spacer components */}
      {/* If id is in the url, that means we update the ticket. If id is not in the url, that means we create a new ticket. */}
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Button variant="contained" color="warning" onClick={handleClick({ isSubmitted: false, _id: _id })}>
            Save
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="success" onClick={handleClick({ isSubmitted: true })}>
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TicketForm;
