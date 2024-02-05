require('dotenv').config()
const express = require('express');


const app = express();

const port_num = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

const githubData = {
    "login": "ramalloc",
    "id": 95184750,
    "node_id": "U_kgDOBaxnbg",
    "avatar_url": "https://avatars.githubusercontent.com/u/95184750?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ramalloc",
    "html_url": "https://github.com/ramalloc",
    "followers_url": "https://api.github.com/users/ramalloc/followers",
    "following_url": "https://api.github.com/users/ramalloc/following{/other_user}",
    "gists_url": "https://api.github.com/users/ramalloc/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ramalloc/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ramalloc/subscriptions",
    "organizations_url": "https://api.github.com/users/ramalloc/orgs",
    "repos_url": "https://api.github.com/users/ramalloc/repos",
    "events_url": "https://api.github.com/users/ramalloc/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ramalloc/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "RoshanK16239516",
    "public_repos": 13,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2021-11-28T17:58:53Z",
    "updated_at": "2023-10-03T05:15:06Z"
  
}

app.get('/github', (req, res) => {
    res.json(githubData);
})

app.get('/twitter', (req, res) => {
    res.send("Get method Called, response sended on twitter !");
})

app.get('/login', (req, res) => {
    res.send("<h1> You entered in Login Page !</h1>");
})

app.get('/youtube', (req, res) => {
    res.send("<h2>This is youtube response page ! </h2>");
})

app.listen(port_num, () => {
    console.log(`Port is listening on post no. ${port_num} !`);
})