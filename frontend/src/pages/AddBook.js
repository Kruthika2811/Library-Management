

import React, { useState } from 'react';
import axios from 'axios';
import './AddBook.css'; 

function AddBook() {
  const [book, setBook] = useState({ title: '', author: '', category: '', available: true });

  const addBook = async (e) => {
    e.preventDefault();
    try {
      await axios.post( `${process.env.REACT_APP_API_URL}/api/books`, book, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      alert("Book added");
      window.location.href = "/";
    } catch (err) {
      alert("Error adding book");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={addBook}>
        <h2>Add New Book</h2>
        <input placeholder="Title" onChange={(e) => setBook({ ...book, title: e.target.value })} required />
        <input placeholder="Author" onChange={(e) => setBook({ ...book, author: e.target.value })} required />
        <input placeholder="Category" onChange={(e) => setBook({ ...book, category: e.target.value })} required />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
