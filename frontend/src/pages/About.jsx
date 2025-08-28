import React from 'react';

function About() {
  const styles = {
    container: {
      padding: "40px",
      maxWidth: "900px",
      margin: "0 auto",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
      backgroundColor: "#f9f9f9",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
    },
    h1: {
      fontSize: "36px",
      color: "#2c3e50",
      marginBottom: "20px"
    },
    h2: {
      fontSize: "24px",
      marginTop: "30px",
      marginBottom: "15px",
      color: "#34495e"
    },
    p: {
      fontSize: "16px",
      lineHeight: "1.7",
      marginBottom: "20px"
    },
    ul: {
      listStyleType: "disc",
      paddingLeft: "20px",
      marginBottom: "20px"
    },
    li: {
      fontSize: "16px",
      marginBottom: "8px"
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>About Us</h1>
      <p style={styles.p}>
        Welcome to our Library Management System.
        <br /><br />
        The primary goal of this system is to provide an efficient and user-friendly platform for managing library resources. It enables students and faculty members to easily browse, issue, return, and manage books online without the hassle of manual record-keeping.
      </p>
      
      <h2 style={styles.h2}>Key Features</h2>
      <ul style={styles.ul}>
        <li style={styles.li}>User registration and secure login system for both students and admins.</li>
        <li style={styles.li}>Role-based access: Admins can manage books and users, while students can browse and borrow books.</li>
        <li style={styles.li}>Efficient book search functionality with filtering and sorting options.</li>
        <li style={styles.li}>Real-time updates of book availability and issue status.</li>
        <li style={styles.li}>Secure backend API with JWT-based authentication and authorization.</li>
        <li style={styles.li}>Clean and responsive user interface built with React and CSS.</li>
      </ul>
      
      <h2 style={styles.h2}>Purpose</h2>
      <p style={styles.p}>
        This system was developed as part of our Full Stack Development curriculum at the Global Academy of Technology. It allowed us to apply practical knowledge of backend and frontend integration, RESTful API development, database management, and modern web development frameworks.
      </p>
      
      <h2 style={styles.h2}>Conclusion</h2>
      <p style={styles.p}>
        We aim to continue improving this project by adding more features and making it scalable for larger library systems. Thank you for exploring our Library Management System.
      </p>
    </div>
  );
}

export default About;
