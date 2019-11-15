require('dotenv').config();
const ctrl = require('./controller');
const express = require('express');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env


const app = express()

app.use(express.json())

//Users
// app.get('/', ctrl.getUsers)
app.post('/', ctrl.addUser)


//Posts


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, () => 
    console.log(`It survived your changes!... ${SERVER_PORT}`)
    
)

})