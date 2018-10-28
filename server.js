// Required set up
const express = require('express');
const mongoose = require('mongoose');
const expressJwt = require('express-jwt')
const morgan = require('morgan');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 7000;

// Required middleware
app
    .use(morgan('dev'))
    .use(express.json())
    .use('./api', expressJwt({secret: process.env.SECRET}));   

app
    .use("/auth", require("./routes/auth"))
    .use("/events", require("./routes/publicEvents"))
    .use("/api/events", require("./routes/privateEvents"));

mongoose
    .connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds241133.mlab.com:41133/plugville`, {useNewUrlParser: true})
    .then(() => console.log('connected to plugvilles database'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server is now listening on PORT:${PORT}...`));