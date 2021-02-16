const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use("/movies", require('./lib/movies/route'))
  .get('*', (_,res)=>res.status(404).json({success:false, data:"Endpoint does not exist"}))

module.exports = app