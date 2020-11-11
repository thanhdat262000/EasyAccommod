const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const apartmentsRouter = require('./routes/apartmentsRouter');
const apartmentRouter = require('./routes/apartmentRouter');

const app = express();

// Use body-parser => req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/apartment', apartmentRouter)
app.use('/apartments', apartmentsRouter);


app.listen(process.env.PORT | 3000,() => {
    console.log('Listening on port ...')
})