import express from 'express';
import bodyParser from 'body-parser';
import { connect } from './config/database.js';
import apiRoutes from './routes/index.js';

// import UserRepository from './repository/user-repository.js';
// import TweetRepository from './repository/tweet-repository.js';
// import LikeService from './services/like-service.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',apiRoutes);

app.listen(3000, async ()=> {

    console.log('server started at port 3000');
    await connect();
    console.log('Mongo db connected');


    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0,10);
    // const users = await userRepo.getAll();
    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id, 'Tweet', users[0].id);

}); 