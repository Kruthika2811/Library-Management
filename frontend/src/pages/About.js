// import React from 'react';

// function About() {
//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>About Us</h1>
//       <p>
//         Welcome to our Library Management System. This project is developed using the MERN stack (MongoDB, Express, React, and Node.js).
//       </p>
//       <p>
//         Our system helps users manage and browse books efficiently, offering easy registration and login for users and admins.
//       </p>
//       <p>
//         This mini project was created as part of the Full Stack Development course at the Global Academy of Technology.
//       </p>
//     </div>
//   );
// }

// export default About;

import React from 'react';
import './About.css';

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Us</h1>
      <p>
        Welcome to our Library Management System.
      
        The primary goal of this system is to provide an efficient and user-friendly platform for managing library resources. It enables students and faculty members to easily browse, issue, return, and manage books online without the hassle of manual record-keeping.
      </p>
      <h2>Key Features</h2>
      <ul>
        <li>User registration and secure login system for both students and admins.</li>
        <li>Role-based access: Admins can manage books and users, while students can browse and borrow books.</li>
        <li>Efficient book search functionality with filtering and sorting options.</li>
        <li>Real-time updates of book availability and issue status.</li>
        <li>Secure backend API with JWT-based authentication and authorization.</li>
        <li>Clean and responsive user interface built with React and CSS.</li>
      </ul>
      <h2>Purpose</h2>
      <p>
        This system was developed as part of our Full Stack Development curriculum at the Global Academy of Technology. It allowed us to apply practical knowledge of backend and frontend integration, RESTful API development, database management, and modern web development frameworks.
      </p>
     
     
      <h2>Conclusion</h2>
      <p>
        We aim to continue improving this project by adding more features and making it scalable for larger library systems. Thank you for exploring our Library Management System.
      </p>
    </div>
  );
}

export default About;
