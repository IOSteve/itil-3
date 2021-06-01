import { useState, useEffect } from "react";
import CaseList from './CaseList';
import useFetch from "./useFetch";

const Home = () => {
  const { data:Ticket, isPending, error } = useFetch('http://localhost:3004/tickets');

  return (
    <div className="home">
      <h2>Homepage</h2>
      <img src="/images/banner.jpg" alt="" />
      { error && <div>{ error }</div> }
      {isPending && <div>Loading...</div> }
      {Ticket && <CaseList child={Ticket} title="All Tickets" />}
    </div>
  );
};

export default Home;
