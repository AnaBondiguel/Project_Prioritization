import React from 'react';
import MyTickets from './MyTickets';
import NewTicket from './NewTicket';
import TicketDetails from './TicketDetails';
import Listings from './Listings';
import SearchResults from './SearchResults';
import SubmissionSuccess from './SubmissionSuccess';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Container from '@mui/material/Container';
import NavBar from './NavBar';
import { Routes, Route } from "react-router-dom";
import Header from "./Header";

const sections = [
  {
    title: "My Tickets", url:"mytickets"
  },
  {
    title: "New Ticket", url:"newticket"
  },
  {
    title: "Listings", url:"listings"
  }
]
function App() {
  return (
    <div className="App">
        <Header />
        <Container maxWidth='lg'>
            <NavBar title="Project Priorization" sections={sections}></NavBar>
        </Container>

        <Routes>
          <Route path="/" element={<MyTickets />} />
          <Route path="Mytickets" element={<MyTickets />} />
          <Route path="Newticket" element={<NewTicket />} />
          <Route path="Listings" element={<Listings />} />
          <Route path="Signin" element={<SignIn />} />
          <Route path="Signup" element={<SignUp />} />
          <Route path="Searchresults" element={<SearchResults />} />
          <Route path="Submissionsuccess" element={<SubmissionSuccess />} />
          <Route path="Ticketdetails" element={<TicketDetails  />} />
         
          {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      
       
      
      
       
      
    </div>
  );
}

export default App;
