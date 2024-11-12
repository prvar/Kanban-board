import React from 'react';

function Controls({ setGroupBy, setSortBy }) {
  return (
    <div className="controls">
      <div>
        <button onClick={() => setGroupBy('status')}>Group by Status</button>
        <button onClick={() => setGroupBy('user')}>Group by User</button>
        <button onClick={() => setGroupBy('priority')}>Group by Priority</button>
      </div>
      <div>
        <button onClick={() => setSortBy('priority')}>Sort by Priority</button>
        <button onClick={() => setSortBy('title')}>Sort by Title</button>
      </div>
    </div>
  );
}

export default Controls;