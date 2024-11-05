const express = require('express');
const connect = require('./config/database');

const app = express();

const { TweetRepository } = require('./repository/index');
const TweetService = require('./services/tweet-service');

app.listen(3000, async ()=> {

    console.log('server started at port 3000');
    await connect();
    console.log('Mongo db connected');
    let service = new TweetService();
    const tweet = service.create({content: 'This is #processing and really #Excited having #Fun wow'});
    console.log(tweet);
}); 