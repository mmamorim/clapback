import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import clapback from "./index.js"

const server = express();
server.use(bodyParser.json());       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
    extended: true
}));
server.use(cors())

const port = process.env.PORT || 3000;

await clapback.init({ server, port, dbFileName: 'db.json' })

server.get('/', (req, res) => {
    res.send('🙋‍♂️ Hello...route /');
});

server.listen(port, () => {
    console.log('Server is running on port '+port);
});