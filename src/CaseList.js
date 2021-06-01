const CaseList = (props) => {
    const Ticket = props.child;
    const title = props.title;
  


  return (
    <div className="case-list">
    <h2>{ title }</h2>
      {Ticket.map((Ticket) => (
        <div className="Ticket-preview" key={Ticket.id}>
          <h2>{Ticket.id}</h2>
          <p>
            {Ticket.name} {Ticket.body} {Ticket.status}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CaseList;
