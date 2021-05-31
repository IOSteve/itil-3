import index from './index.css';
const Ticket = ({ props }) => {
  const rsvp = props.Ticket;
  const title = props.title;

  return (
    <div className="Ticket-list">
     (Ticket.map(Ticket) = (
        <div className="Ticket-preview" key={Ticket.id}>
          <h2>{Ticket.id} </h2>
          <p>
            {Ticket.name} {Ticket.body} {Ticket.status}
          </p>
        </div>
      ))
    </div>
  );
};
 
export default Ticket;



