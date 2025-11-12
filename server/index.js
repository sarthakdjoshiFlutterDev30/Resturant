const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../client/build')));

// API routes (for future expansion)
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'The Gourmet Table server is running',
    timestamp: new Date().toISOString()
  });
});

// API endpoint for contact form (static response for now)
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message } = req.body;
  
  // In a real application, you would save this to a database
  // or send an email notification
  console.log('Contact form submission:', {
    name,
    email,
    phone,
    message,
    timestamp: new Date().toISOString()
  });
  
  res.json({ 
    success: true, 
    message: 'Thank you for your message. We will get back to you soon!' 
  });
});

// API endpoint for reservation requests (static response for now)
app.post('/api/reservation', (req, res) => {
  const { name, email, phone, date, time, guests, message } = req.body;
  
  // In a real application, you would save this to a database
  // and integrate with a reservation system
  console.log('Reservation request:', {
    name,
    email,
    phone,
    date,
    time,
    guests,
    message,
    timestamp: new Date().toISOString()
  });
  
  res.json({ 
    success: true, 
    message: 'Your reservation request has been received. We will confirm shortly!' 
  });
});

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`🍽️  The Gourmet Table server is running on port ${PORT}`);
  console.log(`📱 Local: http://localhost:${PORT}`);
  console.log(`🌐 Network: http://0.0.0.0:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
