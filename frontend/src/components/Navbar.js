// // // import React from 'react';
// // // import { Link } from 'react-router-dom';

// // // function Navbar() {
// // //   const role = localStorage.getItem('role');

// // //   const logout = () => {
// // //     localStorage.clear();
// // //     window.location.href = "/";
// // //   };

// // //   return (
// // //     <nav>
// // //       <Link to="/">Books</Link> | 
// // //       <Link to="/login">Login</Link> | 
// // //       <Link to="/register">Register</Link> | 
// // //       {role && <Link to="/dashboard">Dashboard</Link>} | 
// // //       {role && <button onClick={logout}>Logout</button>}
// // //     </nav>
// // //   );
// // // }

// // // export default Navbar;

// // // src/components/Navbar.js
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function Navbar() {
// //   const role = localStorage.getItem('role');

// //   const logout = () => {
// //     localStorage.clear();
// //     window.location.href = "/";
// //   };

// //   return (
// //     <nav>
// //       <Link to="/">Books</Link> | 
// //       <Link to="/login">Login</Link> | 
// //       <Link to="/register">Register</Link> | 
// //       {role && <Link to="/dashboard">Dashboard</Link>} | 
// //       {role && <button onClick={logout}>Logout</button>}
// //     </nav>
// //   );
// // }

// // export default Navbar;

// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//   const role = localStorage.getItem('role');

//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
//       <Link to="/">Books</Link> |{" "}
//       <Link to="/about">About</Link> |{" "}
//       <Link to="/contact">Contact</Link> |{" "}
//       <Link to="/login">Login</Link> |{" "}
//       <Link to="/register">Register</Link> |{" "}
//       {role && <Link to="/dashboard">Dashboard</Link>} |{" "}
//       {role && <button onClick={logout}>Logout</button>}
//     </nav>
//   );
// }

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css'; // create this CSS file

// function Navbar() {
//   const role = localStorage.getItem('role');

//   const logout = () => {
//     localStorage.clear();
//     window.location.href = "/";
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-links">
//         <Link to="/">Books</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/login">Login</Link>
//         <Link to="/register">Register</Link>
//         {role && <Link to="/dashboard">Dashboard</Link>}
//       </div>
//       {role && (
//         <button className="logout-btn" onClick={logout}>
//           Logout
//         </button>
//       )}
//     </nav>
//   );
// }

// export default Navbar;

// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const role = localStorage.getItem('role');

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <nav>
      <Link to="/">Books</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/contact">Contact</Link> | 
      <Link to="/login">Login</Link> | 
      <Link to="/register">Register</Link> | 
      {role && <Link to="/dashboard">Dashboard</Link>} | 
      {role && <button onClick={logout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
