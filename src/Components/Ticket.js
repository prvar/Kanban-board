import React from 'react';

function Ticket({ ticket }) {
  const priorityColor = {
    4: 'red', 3: 'orange', 2: 'yellow', 1: 'green', 0: 'grey'
  };

  return (
    <div className="ticket" style={{ borderLeftColor: priorityColor[ticket.priority] }}>
      <h3>{ticket.title}</h3>
      <p>Status: {ticket.status}</p>
      <p>User: {ticket.userId}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
}

export default Ticket;