import { useState } from "react";
import index from './index.css';
import Ticket from "./Ticket";

const Home = () => {
  const [Ticket, setTicket] = useState([
    {
      name: "Name: Zader",
      body: " Issue: issue is....",
      status: "Status: resolved",
      id: "100001",
    },
    { name: "luke", body: "issue is....", status: "open", id: "100002" },
    { name: "bill", body: "issue is....", status: "pending", id: "100004" },
    { name: "mike", body: "issue is....", status: "closed", id: "100005" },
    {
      name: "harry",
      body: "issue is....",
      status: "in progress",
      id: "100006",
    },
  ]);

  return (
    <div className="home">
      <h1>Homepage</h1>
      <img src="/images/banner.jpg" alt="" />

      {Ticket.map((Ticket) => (
      <div className="Ticket-preview" key={Ticket.id}>
      <h2>{Ticket.id}</h2>
      <p>{Ticket.name} {Ticket.body} {Ticket.status}</p>
      </div> 
      ))}   
  </div>  
  );
}  
export default Home;
