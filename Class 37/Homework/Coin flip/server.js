const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    const params = querystring.parse(parsedUrl.query);
    const coinflip = Math.floor(Math.random() * 2);
    const coinflipResult = coinflip === 1 ? 'heads' : 'tails';

    console.log(`Request for ${pathname}`);

    if (pathname === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    } else if (pathname === '/api') {
        if ('guess' in params) {
            let result = params['guess'] === coinflipResult ? "You win!" : "You lose!";
            res.writeHead(200, {'Content-Type': 'application/json'});
            const objToJson = {
                flip: coinflipResult,
                result: result
            };
            res.end(JSON.stringify(objToJson));
        } else {
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ error: "Guess parameter is missing" }));
        }
    } else if (pathname === '/js/main.js') {
        const jsPath = path.join(__dirname, 'js', 'main.js');
        fs.readFile(jsPath, (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/plain'});
                res.end('Not Found');
                return;
            }
            res.writeHead(200, {'Content-Type': 'application/javascript'});
            res.end(data);
        });
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server is listening on port 8000');
});
