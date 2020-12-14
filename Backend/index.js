const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
require("dotenv").config();

const apartmentsRouter = require("./routes/apartmentsRouter");
const apartmentRouter = require("./routes/apartmentRouter");
const signinRouter = require("./routes/signin");
const ownerRouter = require("./routes/owner");
const registerRouter = require("./routes/register");

const app = express();

// Use body-parser => req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Apartment Router
app.use("/apartment", apartmentRouter);
app.use("/apartments", apartmentsRouter);

// Owner Router
app.use("/owner", ownerRouter);

app.use("/signin", signinRouter);
app.use("/register", registerRouter);

app.listen(process.env.PORT, () => {
  console.log("Listening on port ...");
});
