// // src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Books from './pages/Books';
// import Dashboard from './pages/Dashboard';
// import AddBook from './pages/AddBook';
// import About from './pages/About';
// import Contact from './pages/Contact';


// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Books />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-book" element={<AddBook />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// // src/App.js
// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Navbar from './components/Navbar';
// // import Login from './pages/Login';
// // import Register from './pages/Register';
// // import Books from './pages/Books';
// // import Dashboard from './pages/Dashboard';
// // import AddBook from './pages/AddBook';
// // import Home from './pages/Home';
// // import About from './pages/About';
// // import Contact from './pages/Contact';

// // function App() {
// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/" element={<Home />} />               {/* Homepage */}
// //         <Route path="/about" element={<About />} />         {/* About page */}
// //         <Route path="/contact" element={<Contact />} />     {/* Contact page */}
// //         <Route path="/books" element={<Books />} />         {/* Books page */}
// //         <Route path="/login" element={<Login />} />         {/* Login */}
// //         <Route path="/register" element={<Register />} />   {/* Register */}
// //         <Route path="/dashboard" element={<Dashboard />} /> {/* Admin Dashboard */}
// //         <Route path="/add-book" element={<AddBook />} />    {/* Add book page */}
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Books from './pages/Books';
import Dashboard from './pages/Dashboard';
import AddBook from './pages/AddBook';
import About from './pages/About';     // You already have this import
import Contact from './pages/Contact'; // You already have this import

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/about" element={<About />} />       {/* Add this */}
        <Route path="/contact" element={<Contact />} />   {/* Add this */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
