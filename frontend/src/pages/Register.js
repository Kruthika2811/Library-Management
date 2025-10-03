// import React, { useState } from 'react';
// import axios from 'axios';

// function Register() {
//   const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const registerUser = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/users/register', form);
//       alert("Registration successful");
//       window.location.href = "/login";
//     } catch (err) {
//       alert("Registration failed");
//     }
//   };

//   return (
//     <form onSubmit={registerUser}>
//       <h2>Register</h2>
//       <input name="name" placeholder="Name" onChange={handleChange} required />
//       <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
//       <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
//       <select name="role" onChange={handleChange}>
//         <option value="student">Student</option>
//         <option value="admin">Admin</option>
//       </select>
//       <button type="submit">Register</button>
//     </form>
//   );
// }

// export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Import the new CSS file

function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post( `${process.env.REACT_APP_API_URL}/api/users/register`, form);
      alert("Registration successful");
      window.location.href = "/login";
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <form onSubmit={registerUser}>
        <h2>Register</h2>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <select name="role" onChange={handleChange}>
          <option value="student">Student</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
