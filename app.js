import express from "express"
import cors from "cors"

const port = 5000;
const server = express();
let tweets = [];
let users = [];
let backUp = {
    username: "",
    avatar: "",
}

server.use(cors())
server.use(express.json())

server.post("/sign-up", (req, res) => {
    const user = req.body;
    backUp.username = user.username;
    backUp.avatar = user.avatar
    users.push(user);
    res.send("ok");
})

server.post("/tweets", (req, res) => {
    const tweet = req.body;
    tweets.push({ ...backUp, ...tweet });
    res.send("ok");
})

server.get("/tweets", (req, res) => {
    if (tweets.length <= 10) {
        res.send(tweets.reverse())
    } else {
        const tweetsSlice = tweets.slice(tweets.length - 10, tweets.length)
        res.send(tweetsSlice.reverse());
    }
})

server.listen(port, () => {
    console.log(`Listen on port : ${port}`)
})