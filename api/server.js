import express from 'express';


import {MongoClient} from 'mongodb';


import requests from 'requests';

import router from './routes';

import jobs from './jobs';


// Create DB connection in order to facilitate data exchange
const uri = `mongodb+srv://dbUser:dbPassword@cluster0=ujjcn.mongodb.net/test?retryWrites=true&w=majority`


let app = express();

// Authentication flow and db interaction
app.use('/api', router);

// Test route to make sure that the API is handling requests
app.get('/', (req, res, next) => {
  res.send("base api route");
});

app.post('/schedule/test/:cronString_phoneNumber', (req, res, next) => {

});

app.listen(3000, () => {
  console.log("App is now listening on port 3000");
  

  Object.keys(jobs).forEach((key) => {
    jobs[key].start();
  });

});