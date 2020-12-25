const express = require("express");
const chat = express.Router();

chat.get("/", (req, res) => {
  res.send("Chat");
});

module.exports = chat;
