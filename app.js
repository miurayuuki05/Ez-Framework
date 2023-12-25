const express = require('express');
const app = express();
const Router = require('./route/router');
const Api = require('./route/api');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const box = require('./utils/serverruncli');
dotenv.config();

mongoose.connect(process.env.MONGO_HOST);

app.set('view engine', 'ejs');
app.use(express.json());
app.use("/", Router);
app.use("/api", Api);
app.use(express.static("public"));

app.listen(process.env.PORT_DEV);





