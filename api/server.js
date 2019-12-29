import express from 'express';
import requests from 'requests';

import router from './routes';

import jobs from './jobs';

let app = express();

// Authentication flow and db interaction
app.use('/api', router);

// Test route to make sure that the API is handling requests
app.get('/', (req, res, resp) => {
  res.send("LET'S SEND SOME CAT FACTS GANG");
});



app.listen(3000, () => {
  console.log("App is now listening on port 3000");
  

  Object.keys(jobs).forEach((key) => {
    jobs[key].start();
  });

});