const express = require('express');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET
const MAIL_APP_PASSWORD = process.env.MAIL_APP_PASSWORD
const MONGO_URI = process.env.MONGO_URI
const PIN = process.env.PIN;

mongoose.connect(MONGO_URI,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
const connect = mongoose.connection;
connect.on('error', (error) => console.log("db error"));
connect.once('open', () => console.log('connected db'));

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.json())


app.get('/', (req, res) => {
    res.sendFile('index.html');
})
app.use(require('./api/report'));
app.get("**", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.use(require('./api/activity'));
app.use(require('./api/batch'));
app.use(require('./api/block'))
app.use(require('./api/dashboard'));
app.use(require('./api/items'));
app.use(require('./api/party'));
app.use(require('./api/process'));
app.use(require('./api/quarry'));
app.use(require('./api/slabs'));
app.use(require('./api/trade'));
app.use(require("./api/user"));
app.use(require('./api/yard'));
app.use(require('./api/company'));
app.use(require('./api/unit'));
app.use(require('./api/drawer'));


app.listen(3000, () => console.log("listening 3000"));



