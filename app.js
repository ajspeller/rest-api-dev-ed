require('dotenv/config');
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// import routes
const postsRoute = require('./routes/posts');

app.use(bodyParser.json());

app.use('/posts', postsRoute);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log('connected to db')
);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
