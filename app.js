const express = require('express');
const req = require('express/lib/request');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
//middlewear
app.use('/posts', () => {
    console.log('This is our security middlewear running');
});

//routes
app.get('/', (req, res) => {
    res.send('We are at home');
});

app.get('/', (req, res) => {
   res.send('We are on posts');
});

//connect to Database
mongoose.connect(
    process.env.DB_CONNECTION,() => {
        console.log('Yo I am connected to the DB');
    }
)

//mongoose.connect('mongosh "mongodb+srv://cluster0.j2lag.mongodb.net/myFirstDatabase" --username kirangurung',() => {
 //   console.log('Connected to DB');
//})

//listerning Port
app.listen(8502);
