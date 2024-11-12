import React from 'react';
import Ticket from './Ticket';

function KanbanColumn({ title, tickets }) {
  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket} />)}
    </div>
  );
}

export default KanbanColumn;