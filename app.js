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



server.listen(port, () => {
    console.log(`Listen on port : ${port}`)
})