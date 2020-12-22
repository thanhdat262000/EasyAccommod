const express = require("express");
const http = require("http");
const cors = require("cors");
const socketio = require("socket.io");
const bodyParser = require("body-parser");
require("dotenv").config();

const apartmentsRouter = require("./routes/apartmentsRouter");
const apartmentRouter = require("./routes/apartmentRouter");
const signinRouter = require("./routes/signin");
const ownerRouter = require("./routes/owner");
const registerRouter = require("./routes/register");
const adminRouter = require("./routes/admin");
const { authUser, authRole } = require("./middlewares/authMiddleWare");
const {authSignin} = require('./middlewares/authSignin');
const { ROLE } = require("./role");
const chat = require("./routes/chat");
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

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
app.use("/owner/apartments", authUser, authRole(ROLE.OWNER), ownerRouter);

// Admin Router
app.use("/admin", authUser, authRole(ROLE.ADMIN), adminRouter);

app.use("/signin", authSignin, signinRouter);
app.use("/register", registerRouter);
app.use("/", chat);

io.on("connect", (socket) => {
  socket.on("join", ({ privilege, name }, callback) => {
    console.log("Join!", privilege);
    if (privilege === "owner") socket.emit("check", "Quản trị viên");
    callback();
  });
  socket.on("sendMessage", ({ name, privilege, message }) => {
    socket.broadcast.emit("message", { name: name, message });
  });
});

server.listen(process.env.PORT, () => {
  console.log("Listening on port ...");
});
