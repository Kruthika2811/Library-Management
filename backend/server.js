// // // backend/server.js
// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // require('dotenv').config();

// // const app = express();
// // app.use(cors());
// // app.use(express.json());

// // // DB connection
// // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// // .then(() => console.log("MongoDB connected"))
// // .catch(err => console.log(err));

// // // Routes
// // const bookRoutes = require('./Routes/bookRoutes');
// // app.use('/api/books', bookRoutes);

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config();

// const connectDB = require('./config/db'); // optional if using separate db.js file
// connectDB(); // uncomment if using db.js file

// const app = express();
// app.use(cors());
// app.use(express.json());

// // MongoDB connection (you already had this)
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => console.log("MongoDB connected"))
//   .catch(err => console.log(err));

// // Routes
// const bookRoutes = require('./Routes/bookRoutes');
// const userRoutes = require('./Routes/userRoutes'); // ✅ New

// app.use('/api/books', bookRoutes);
// app.use('/api/users', userRoutes); // ✅ New

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
// app.use(cors());
app.use(cors({
  origin: 'https://library05.netlify.app', // <-- Your Netlify URL
  credentials: true
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// Routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/books', bookRoutes);
app.use('/api/users', userRoutes);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
