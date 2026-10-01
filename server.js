const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/api/data' && req.method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({
            status: 'success',
            message: 'Успіх! Дані успішно отримано з іншого origin.'
        }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Маршрут не знайдено' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Бекенд-сервер запущено на http://localhost:${PORT}`);
    console.log(`Очікування запитів на http://localhost:${PORT}/api/data`);
});