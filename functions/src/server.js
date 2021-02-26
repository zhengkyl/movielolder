const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors({ origin: true }))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use("/galleries", require('./lib/galleries/route'))
  .use("/search", require('./lib/search/route'))
  .get('*', (_,res)=>res.status(404).json({success:false, data:"Endpoint does not exist"}))

module.exports = app

// https://itnext.io/running-express-js-on-firebase-cloud-functions-a20b536c6aec