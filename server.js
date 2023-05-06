'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const {Client} = require('mongodb')

const app = express();
app.use(cors());
const port = 3000;
const APIKey = ""

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', serverHandler);

function serverHandler(req, res) {
    res.send("hello world");
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})