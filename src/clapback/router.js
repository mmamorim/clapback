import express from 'express'
import chalk from 'chalk';
import page from "./viewer/page.js"

const router = express.Router();

function getRouter(cb,PORT) {
    let urlServer = "http://localhost:"+PORT+"/clapback/"

    router.get('/', (req, res) => {
        res.send('router raiz');
    });

    router.get('/docs', (req, res) => {
        res.send('docs');
    });

    router.get('/viewer', (req, res) => {
        res.send(page(urlServer))
    })

    router.get('/getData', (req, res) => {
        //console.log("req.query", req.query);
        let path = "/"
        if (req.query.path) {
            path = req.query.path
        }
        //console.log("path", path);
        let data = cb.get(path)
        //console.log("data", data);
        res.json({ path, data });
    });

    router.post('/setData', (req, res) => {
        if(req.body && req.body.path && req.body.data !== undefined) {
            console.log("req.body", req.body);
            cb.set(req.body.path,req.body.data)
        }
        res.send("ok");
    });

    console.log(chalk.blue("-------------------------------------"));
    console.log("🔥🚀 Data viewer on: ");
    console.log("     "+chalk.blue(urlServer+"viewer"));
    console.log(chalk.blue("-------------------------------------"));
    
    return router
}

export default getRouter
