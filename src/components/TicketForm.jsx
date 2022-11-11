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
  console.log(location.state);
  const initialFormState = {
    initiative: "",
    description: "",
    target: "",
    dueDate: "",
    impact: "",
    confidence: "",
    effort: "",
    selectedFile: "",
    feedback: "",
    isSubmitted: false,
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
  const [ticket, setTicket] = useState(null);
  const [formState, setFormState] = useState(initialFormState);
  const { dispatch, store } = useGlobalState();
  const { targets, impacts, confidences, efforts } = store;
  const [value, setValue] = React.useState(null); //for date picker

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    // if (id) {
    //   getTicket(id).then((ticket) => {
    //     const target = targets.find(
    //       (target) => target.name.toLowerCase() === ticket.target.toLowerCase()
    //     );
    //     setFormState({
    //       target_id: target.id,
    //       description: ticket.description,
    //     });
    //   });
    // }
    // /tickets/new
    // location.state = undefined
    // setFormState(undefined)
    //setFormState(location.state)

    // state = initialFormState
    setFormState((state) => {
      return {
        ...state, // this is the initialFormState
        ...location.state, // this is the ticket details
      };
    });
  }, [location.state]);

  function handleChange(event) {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }

  function submitClick(event) {
    event.preventDefault();
    createTicket({ ...formState, isSubmitted: true })
      .then((ticket) => {
        dispatch({ type: "addTicket", data: ticket });
        console.log(ticket);
        //we can navigate back to the my tickets page once we create a ticket.
        navigate("/submissionsuccess");
      })
      .catch((error) => console.log(error));
  }

  function handleClick(event) {
    event.preventDefault();
    //if statement to handle update ticket and create ticket
    if (id) {
      updateTicket({ id: id, ...formState })
        .then(() => {
          dispatch({
            type: "updateTicket",
            data: { id: id, ...formState },
          });
          //if user update ticket with form, leave ticket to show on the page.
          navigate(`/mytickets/${id}`);
        })
        .catch((error) => console.log(error));
    } else {
      createTicket({ ...formState })
        .then((ticket) => {
          dispatch({ type: "addTicket", data: ticket });
          //we can navigate back to the my tickets page once we create a ticket.
          navigate("/mytickets");
        })
        .catch((error) => console.log(error));
    }
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
              name="initiative"
              value={formState.initiative}
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

            <Typography>Due Date:</Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Due date"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>

            <Typography>Upload files:</Typography>
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
            />
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
      <br></br> <br></br>
      {/* If id is in the url, that means we update the ticket. If id is not in the url, that means we create a new ticket. */}
      <Grid container spacing={1}>
        <Grid item xs={1}>
          <Button variant="contained" onClick={submitClick}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="success" onClick={handleClick}>
            {id ? "Save" : "Update"}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TicketForm;
