Day 1 – Raw HTTP Server (Node.js)

A minimal HTTP server built without Express using only Node’s built-in http module.
This project demonstrates how servers work under the hood by manually handling routing, JSON responses, and request body parsing.

Endpoints:
GET /hello-world
GET /about
POST /echo (+ example JSON)
404 behaviour

What I learnt:
How Node’s http module works at the lowest level.
How to create a server and handle incoming requests manually.
The difference between writeHead (setting HTTP metadata) and end (sending the response).
How routing works without Express or a framework.
How Node processes request bodies as streams, using:
req.on("data")
req.on("end")
Why asynchronous event-driven logic is essential in Node (event loop mechanics).
Building this server forced me to understand every moving part instead of relying on abstractions.

How to run:
node server.js