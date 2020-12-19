const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
require("dotenv").config();

const apartmentsRouter = require("./routes/apartmentsRouter");
const apartmentRouter = require("./routes/apartmentRouter");
const signinRouter = require("./routes/signin");
const ownerRouter = require("./routes/owner");
const registerRouter = require("./routes/register");
const adminRouter = require("./routes/admin");
const { authUser, authRole } = require("./middlewares/authMiddleWare");
const { ROLE } = require("./role");
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');


const app = express();

// Swagger UI
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Use body-parser => req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// Apartment Router
app.use("/apartment", apartmentRouter);
app.use("/apartments", apartmentsRouter);

// Owner Router
app.use("/owner/apartments",authUser, authRole(ROLE.OWNER), ownerRouter);

// Admin Router
app.use('/admin', adminRouter);

app.use("/signin", signinRouter);
app.use("/register", registerRouter);

app.listen(process.env.PORT, () => {
  console.log("Listening on port ...");
});
