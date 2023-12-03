const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hellow Node!</h1>');
    res.end('<p>Hello Server!</p>');


}).listen(8001);

server.on('listening', () => {
    console.log('8001에서 서버 대기중');
});

server.on('error', (error) => {
    console.error(error);
});
