const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const apartmentsRouter = require('./routes/apartmentsRouter');
const apartmentRouter = require('./routes/apartmentRouter');
const signinRouter = require('./routes/signin');
const ownerRouter = require('./routes/owner');

const app = express();

// Use body-parser => req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Apartment Router
app.use('/apartment', apartmentRouter)
app.use('/apartments', apartmentsRouter);


// Owner Router
app.use('/owner', ownerRouter);

app.use('/signin', signinRouter);



app.listen(process.env.PORT | 3000,() => {
    console.log('Listening on port ...')
})