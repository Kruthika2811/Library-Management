// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function Books() {
// //   const [books, setBooks] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/api/books', {
// //       headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
// //     }).then(res => setBooks(res.data));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Available Books</h2>
// //       <ul>
// //         {books.map(book => (
// //           <li key={book._id}>{book.title} by {book.author} ({book.available ? "Available" : "Not available"})</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default Books;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Books() {
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get('http://localhost:5000/api/books', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setBooks(res.data);
//       } catch (err) {
//         console.error("Error fetching books:", err.response?.data || err.message);
//         setError('Failed to fetch books. Make sure you are logged in.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>📚 Available Books</h2>

//       {loading && <p>Loading books...</p>}

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {!loading && !error && books.length === 0 && (
//         <p>No books found. Admins can add books from the dashboard.</p>
//       )}

//       <ul>
//         {books.map(book => (
//           <li key={book._id}>
//             <strong>{book.title}</strong> by {book.author} — 
//             <span style={{ color: book.available ? 'green' : 'gray' }}>
//               {book.available ? " Available" : " Not Available"}
//             </span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Books;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../index.css';  // Import your styling if not already imported globally

function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get( `${process.env.REACT_APP_API_URL}/api/books`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        setBooks(res.data);
      } catch (err) {
        console.error("Error fetching books:", err.response?.data || err.message);
        setError('❌ Failed to fetch books. Please login as a student or admin.');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="container">
      <h2>📚 Available Books</h2>

      {loading && <p>Loading books...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && books.length === 0 && (
        <p>No books found. Admins can add books from the dashboard.</p>
      )}

      <ul>
        {books.map(book => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author} — 
            <span style={{ color: book.available ? 'green' : 'gray', marginLeft: '5px' }}>
              {book.available ? "Available" : "Not Available"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;

