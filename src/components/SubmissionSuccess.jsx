import React from "react";
import { Link } from "react-router-dom";

function SubmissionSuccess(){
    return (
        <div>
            <h1>Thank You!</h1>
            <h3>Your ticket has been submitted successfully</h3>
            <Link to="/mytickets">Go back to My Ticket</Link>
        </div>
    );
}

export default SubmissionSuccess;