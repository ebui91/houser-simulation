const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();


const port = 3000;

const app = express();

app.use(bodyParser.json()); 
app.use(cors()); 

massive(process.env.CONNECTION_STRING)
.then(dbInstance => app.set('db',dbInstance))
.catch(console.log);

//app.post
app.get('/api/dashboard', controller.getAll);


app.listen(port, () => {
        console.log(`Listening on port: ${port}`)
})