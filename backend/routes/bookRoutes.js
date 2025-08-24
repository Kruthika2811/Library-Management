// const express = require('express');
// const router = express.Router();
// const { getBooks, addBook } = require('../controllers/bookcontroller');

// router.get('/', getBooks);
// router.post('/', addBook);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { registerUser, loginUser } = require('../controllers/userController');

// router.post('/register', registerUser);
// router.post('/login', loginUser);

// module.exports = router;

const express = require('express');
const router = express.Router();
const { getBooks, addBook } = require('../controllers/bookcontroller');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Get all books
router.get('/', protect, getBooks);

// Add a book (admin only)
router.post('/', protect, adminOnly, addBook);

module.exports = router;
