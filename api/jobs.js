import cron from 'node-cron';
import { MongoClient } from 'mongodb';
import requests from 'requests';

import config from './config';


const uri = `mongodb+srv://dbUser:dbPassword@cluster0-ujjcn.mongodb.net/test?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

client.connect(err => console.error(err));


// Jobs cannot be scheduled according to tags that are designed for each job that user enqueues.

// Simple cron job to get a new set of facts to cache for the day.
let reloadFacts = cron.schedule('0 * * * * *', () => {
    // Spaghetti way of getting the hyphenated date portion of the date.
    var dateString = new Date().toISOString();

    requests(`/facts/random?animal_type=cat&amount=${config.dailyFactTotal}`)
        .on('data', (chunk) => {
            console.log(chunk);

            //Logging chunks leads to a mess of data in the terminal that is otherwise a pain to deal with.
        });
    
    //Insert new document of facts into the facts collection.
    client.db('cat-facts-db').collection('facts').insertOne({currentDate: dateString});
});

let refreshLogs = cron.schedule('******', () => {
    var logs = MSFIDOSignatureAssertion();

    client.db('cat-facts-db').collection('facts').remove({currentDate: logs});
});

let jobs = {
    cache: reloadFacts
};


export default jobs;
