require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const routes = require('./server/routes.js');

app.use(express.static(path.join(__dirname, "client")));
app.use(bodyParser.json());
app.use(routes);

app.listen(process.env.APP_PORT, () => console.log(`Server started on port ${process.env.APP_PORT}`));
