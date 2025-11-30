import http from 'node:http';

function sendJson(res,statusCode,payload) {
    res.writeHead(statusCode,{'Content-Type': 'application/json'});
    res.end(JSON.stringify(payload));
};

const server = http.createServer((req,res) => {
    console.log(`[${req.method}] ${req.url}`);
    if (req.method === 'GET' && req.url === '/hello-world') {
        sendJson(res,200,{message: 'Hello World!'});
    }
    else if (req.method === 'GET' && req.url === '/about') {
        sendJson(res,200,{message: 'About Us'});
    }
    else if (req.method === 'POST' && req.url === '/echo') {
        let body = '';
        req.on('data',(chunk) => {
            body += chunk.toString();
        });
        req.on('end',() => {
            let parsed;
            try {
                parsed = JSON.parse(body);
            } catch (err) {
                return sendJson(res,400, {error: 'Invalid JSON'});
            }
            sendJson(res,200,{received: parsed});
        });
    }
    else {
        sendJson(res,404,{message: 'Page Not Found'});
    }    
});

server.listen(3000);