const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./routes');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');

// mongodb
mongoose.connect('mongodb://localhost:dashboard/dashboard', function (err) {
  if (err) {
    console.log('~Failed to connect~');
	} else {
    console.log('***Connected to MongoDB!***');  
  }
});


// app setup
// app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
// app.use(passport.initialize());
// app.use(passport.session());
router(app);

// server setup
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.on('error', (err) => {
  console.log(err);
});

server.listen(port);
console.log('Server running on ', port);


// mongod.conf, 27017 by default.
