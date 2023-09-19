// routes for adding notes to the page
const apis = require('./routes/apiRoutes');
// routes for changing which page you look at
const html = require('./routes/htmlRoutes');
const express = require('express');


// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// Set up body parsing, static, and route middleware
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', apis);
app.use('/', html);

// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
