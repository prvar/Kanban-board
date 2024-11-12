import React, { useEffect, useState } from "react";
import KanbanColumn from './Components/KanbanColumn';
import Controls from './Components/Controls';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => response.json())
      .then(data => {
        setTickets(data.tickets);
        setUsers(data.users);
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  const userIdToName = userId => {
    const user = users.find(user => user.id === userId);
    return user ? user.name : 'Unknown User';
  };

  const sortedTickets = [...tickets].sort((a, b) => {
    return sortBy === 'priority'
      ? b.priority - a.priority
      : a.title.localeCompare(b.title);
  });

  const groupedTickets = sortedTickets.reduce((acc, ticket) => {
    const key = groupBy === 'user' ? userIdToName(ticket.userId) : ticket[groupBy];
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});

  return (
    <div className="App">
      <Controls setGroupBy={setGroupBy} setSortBy={setSortBy} />
      <div className="kanban-board">
        {Object.keys(groupedTickets).map(group => (
          <KanbanColumn key={group} title={group} tickets={groupedTickets[group]} />
        ))}
      </div>
    </div>
  );
}

export default App;
