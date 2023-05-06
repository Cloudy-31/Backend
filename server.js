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
const APIKey = process.env.APIKey

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', serverHandler);
//app.get('/getData',getDataHandler)

// function getDataHandler(req,res){
//     let url = `https://api.elsevier.com/analytics/scival/country/metrics?metricTypes=ScholarlyOutput&countryIds=400&yearRange=10yrs&includeSelfCitations=true&byYear=true&includedDocs=AllPublicationTypes&journalImpactType=CiteScore&showAsFieldWeighted=false&${APIKey}`
//     axios.get(url)
//     .then(response => {
//         res.json(response)
//     })
// }

function serverHandler(req, res) {
    res.send("hello world");
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})