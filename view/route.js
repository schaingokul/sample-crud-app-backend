const express = require("express");
const route = express.Router();
const {postData,getData,findData} = require("../controllers/controle")

route.post("/", postData)
  
  route.get("/all", getData);
  
  route.get("/:id", findData);

  module.exports = route;