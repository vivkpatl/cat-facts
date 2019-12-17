import express from 'express';
import requests from 'requests';

import router from './routes';

let app = express();

// Authentication flow and db interaction
app.use('/api', router);

// Test route to make sure that the API is handling requests
app.get('/', (req, res, resp) => {
  res.send("LET'S SEND SOME CAT FACTS GANG");
});



app.listen(3000, () => {
  console.log("App is now listening on port 3000");
});