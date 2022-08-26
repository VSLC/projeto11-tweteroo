import express from "express"
import cors from "cors"

const port = 5000;
const server = express();
server.use(cors())

server.get("/", (req, res) => {
    res.send("Iniciando projeto")
});

server.listen(port, () => {
    console.log(`Listen on port : ${port}`)
})