import React from 'react';
import "../App.css";


function AdminPage({ setIsAdmin, isAdmin }) {
  const handleToggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
      <div className="admin-page">
        <h1>Admin Page</h1>
        <p>{isAdmin ? 'You are an admin' : 'You are not an admin'}</p>
        <button onClick={handleToggleAdmin}>
          Toggle Admin Status
        </button>
      </div>
  );
}

export default AdminPage;
