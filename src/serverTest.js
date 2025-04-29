import express from 'express';
import bodyParser from 'body-parser'
import cors from "cors"
import clapback from "./clapback/clapback.js"

const server = express();
server.use(bodyParser.json());       // suporte para JSON-encoded bodies
server.use(bodyParser.urlencoded({     // suporte para URL-encoded bodies
    extended: true
}));
server.use(cors())

const PORT = 3040

clapback.init().then(() => {
    server.use("/clapback",clapback.serve(PORT))
})

server.get('/',(req, res) => {
    res.send('🙋‍♂️ Oi gente...vc acessou a raiz /');
});

server.listen(PORT, () => {
    console.log('Server escutando na porta 3040');
});