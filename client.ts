import { TwitterApi } from 'twitter-api-v2';
require("dotenv").config();

const client = new TwitterApi({
    appKey: `${process.env.APP_KEY}`,
    appSecret: `${process.env.APP_SECRET}`,
    accessToken: `${process.env.ACESS_TOKEN}`,
    accessSecret: `${process.env.ACESS_SECRET}`,
});

export default client