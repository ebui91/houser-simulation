const express= require('express');
const { json }= require('body-parser');
const cors= require('cors');
const massive= require('massive');
const controller= require('./controller');
require('dotenv').config();

const app= express();

app.use(json());
app.use(cors());


massive(process.env.CONNECTION_STRING)
  .then(dbInstance=>{
    app.set('db', dbInstance);
  }).catch(error=>console.log(error));


//HTTP Requests Here
app.post('/post-listing', controller.postListing);
app.get('/listings', controller.getListings);

// const port= process.env.PORT || 3000;
const port= 3000;
app.listen(port, ()=>{
  console.log(`Server is live on port: ${port}`);
});
