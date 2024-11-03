const express = require('express');
const connect = require('./config/database');

const app = express();
const tweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comments');

app.listen(3000, async ()=> {

    console.log('server started at port 3000');
    await connect();
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
        // content: 'First tweet',
        // userEmail: 'a@b.com'
     // });
     const tweetRepo = new tweetRepository();
     const tweet = await tweetRepo.getWithComments('67277849ba40574a9daadd21');
     console.log(tweet);
}); 