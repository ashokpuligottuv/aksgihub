const http = require('http');
const os = require('os'); // Import the OS module
const port = 8080;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type' : 'text/plain' });
    // Include os.hostname() in the response string
    res.end(`Hello from pod: ${os.hostname()}\n`); 
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});