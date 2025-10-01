// import React, { useState } from 'react';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const loginUser = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/users/login', { email, password });
//       localStorage.setItem('token', res.data.token);
//       localStorage.setItem('role', res.data.role);
//       alert("Login successful");
//       window.location.href = "/dashboard";
//     } catch (err) {
//       alert("Login failed");
//     }
//   };

//   return (
//     <form onSubmit={loginUser}>
//       <h2>Login</h2>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
//       <button type="submit">Login</button>
//     </form>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Make sure to create and link this file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://library-management-1-vnap.onrender.com/api/users/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
      localStorage.setItem('name', res.data.name); // You'll add this in the backend later
      alert("Login successful");
      window.location.href = "/dashboard";
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={loginUser}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
