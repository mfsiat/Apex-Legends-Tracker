const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");


// Load env file
dotenv.config({ path: './config.env' });

// Creating the basic express server
const app = express();

// Dev logging
if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Profile Routes
app.use('/api/v1/profile', require('./routes/profile'));

// It will look at our port from the .env
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
