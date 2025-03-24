const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('./knexfile.js')["development"])

const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("application is up and running")
})

app.listen(port, () =>{
    console.log(`Your Knex and Express applications are running succesfully at port: ${port}`)
})

//----------------------------------GETS------------------------------------

app.get('/sites', (req, res) => {
    knex('sites')
        .select('*')
        .then(data => res.json(data))
})

app.get('/sites/:id', (req, res)=>{
    let getId = req.params.id
    knex('sites')
    .select('*')
    .where({'id': parseInt(getId)})
    .then(sites => {
        res.json(sites)
    })
})

app.get('/maintenance', (req, res) => {
    knex('maintenance')
        .select('*')
        .then(data => res.json(data))
})

app.get('/maintenance/:id', (req, res)=>{
    let getId = req.params.id
    knex('maintenance')
    .select('*')
    .where({'id': parseInt(getId)})
    .then(maintenance => {
        res.json(maintenance)
    })
})

//---------------------------------PATCHES------------------------------------

app.patch('/maintenance/:id', (req, res) => {
    let getId = req.params.id
    const {
        task_title, 
        site_id, 
        start_date, 
        end_date, 
        condition_color, 
        approved_rejected, 
        approver_comments
    } = req.body;

    knex('maintenance')
        .where({ "id": getId})
        .update({
            task_title, 
            site_id, 
            start_date, 
            end_date, 
            condition_color, 
            approved_rejected, 
            approver_comments
        })
        .then(function() {
            res.json({success: true, message: 'ok'})
        })
        .catch(err => {
            res.json(err)
        })
})

app.patch('/sites/:id', (req, res) => {
    let getId = req.params.id
    const {site_name} = req.body;

    knex('sites')
        .where({ "id": getId})
        .update({site_name})
        .then(function() {
            res.json({success: true, message: 'ok'})
        })
        .catch(err => {
            res.json(err)
        })
})


//----------------------------------POST------------------------------------

app.use(express.json())
app.post('/maintenance', (req, res)  =>{
    const {id, task_title, site_id, start_date, end_date, condition_color} = req.body

    knex('maintenance')
        .insert({id, task_title, site_id, start_date, end_date, condition_color})
        .then( function() {
            res.json({succeess: true, message: 'ok'})
        })

})

app.post('/sites', (req, res)  =>{
    const {id, site_name} = req.body

    knex('sites')
        .insert({id, site_name})
        .then( function() {
            res.json({succeess: true, message: 'ok'})
        })

})

//---------------------------------DELETE------------------------------------

app.delete('/maintenance/:id', (req, res) => {
    let getId = req.params.id
    knex('maintenance')
        .where({"id" : getId})
        .del()
        .then(function(){
            res.json({succeess: true, message: 'ok'})
        })
})

app.delete('/sites/:id', (req, res) => {
    let getId = req.params.id
    knex('sites')
        .where({"id" : getId})
        .del()
        .then(function(){
            res.json({succeess: true, message: 'ok'})
        })
})


//---------------------------------JOIN------------------------------------

app.get('/joined', (req, res) =>{
    knex('sites')
        .join('maintenance', 'site_id', '=', 'sites.id')
        .then(data => res.json(data))
})