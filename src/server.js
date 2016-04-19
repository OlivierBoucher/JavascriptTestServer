/**
 * Created by olivier on 2016-04-18.
 */
import http from 'http'
import express from 'express'

let app = express();
let api = express.Router();

let user = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 7);
let password = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 7);

api.use((req, res, next) => {
    let auth = req.header('Authorization');

    if(!auth || auth.indexOf('Basic') != 0) {
        res.status(401).send('Unauthorized')
    } else {
        let credentials = new Buffer(auth.substr(5), 'base64').toString().split(':');

        if(credentials.length == 2) {
            if(credentials[0] === user && credentials[1] === password) {
                next()
            } else {
                res.status(401).send('Unauthorized')
            }
        } else {
            res.status(401).send('Unauthorized')
        }
    }
});

api.get('/api/data/piechart', (req, res) => {
    res.json({
        msg: 'hello world'
    })
});

api.get('/api/data/barchart', (req, res) => {
    res.json({
        msg: 'hello world'
    })
});

api.get('/api/data/linechart', (req, res) => {
    res.json({
        msg: 'hello world'
    })
});

app.use('/', api);

let server = http.createServer(app);

server.listen(process.env.PORT || 3000);

console.log(`Server listening on port ${process.env.PORT || 3000}.\nGenerated credentials:\n\tuser: ${user}\n\tpassword: ${password}`);