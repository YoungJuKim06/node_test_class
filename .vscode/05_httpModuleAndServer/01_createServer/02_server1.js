const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hellow Node!</h1>');
    res.end('<p>Hello Server!</p>');


}).listen(8001, () => { // 서버 연결
    console.log('8001번 포트에서 서버 대기중');
});