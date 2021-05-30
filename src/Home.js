import {useState} from 'react'


const Home = () => {
  const [tickets,setTickets] = useState([
    {name:"name", body: "placeholder", status:"placeholder", id:"placeholder"},
    {name:"name", body: "placeholder", status:"placeholder", id:"placeholder"},
    {name:"name", body: "placeholder", status:"placeholder", id:"placeholder"},
    {name:"name", body: "placeholder", status:"placeholder", id:"placeholder"},
    {name:"name", body: "placeholder", status:"placeholder", id:"placeholder"}
  ]);
 

  return (
    <div className="home">
    <h2>Homepage</h2>


    {tickets.map((ticket) => (
      <div className="ticket-preview" key={ticket.id}>
      <h2>{ticket.id} </h2>
      <p>{ticket.name} {ticket.body} {ticket.status}</p>

      </div>

    ))}
     
    </div>
  );
}
 
export default Home;
