const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('./knexfile.js')["development"])

app.get('/', (req, res) => {
    res.send("application is up and running")
})

app.listen(port, () =>{
    console.log(`Your Knex and Express applications are running succesfully at port: ${port}`)
})

app.get('/sites', (req, res) => {
    knex('sites')
        .select('*')
        .then(data => res.json(data))
})

app.get('/maintenance', (req, res) => {
    knex('maintenance')
        .select('*')
        .then(data => res.json(data))
})