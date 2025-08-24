// import React from 'react';

// function Dashboard() {
//   const role = localStorage.getItem('role');
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       {role === 'admin' ? (
//         <div>
//           <p>Welcome, Admin!</p>
//           <a href="/add-book">Add Book</a>
//         </div>
//       ) : (
//         <p>Welcome, Student!</p>
//       )}
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import './Dashboard.css'; // Import the new CSS file

function Dashboard() {
  const role = localStorage.getItem('role');
  
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      {role === 'admin' ? (
        <div className="dashboard-content">
          <p className="welcome-message">Welcome, Admin!</p>
          <a className="dashboard-link" href="/add-book">Add Book</a>
        </div>
      ) : (
        <p className="welcome-message">Welcome, Student!</p>
      )}
    </div>
  );
}

export default Dashboard;

// import React from 'react';
// import './Dashboard.css'; // Make sure your styles are here

// function Dashboard() {
//   const name = localStorage.getItem('name');
//   const role = localStorage.getItem('role');

//   return (
//     <div className="dashboard-container">
//       <h2 className="dashboard-heading">Dashboard</h2>

//       <p className="welcome-message">Welcome, {name}!</p>

//       {role === 'admin' && (
//         <div className="dashboard-content">
//           <a className="dashboard-link" href="/add-book">Add Book</a>
//         </div>
//       )}

//       {/* You can add more features based on role */}
//       {role === 'student' && (
//         <div className="dashboard-content">
//           <a className="dashboard-link" href="/view-books">View Books</a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Dashboard;
