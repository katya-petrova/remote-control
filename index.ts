import { httpServer } from './src/http_server/index';
import { WebSocketServer } from 'ws';
import { controller } from './src/http_server/controller';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.send('Connected');
  ws.on('message', function message(data) {
    console.log('received: %s', data.toString());
    controller(data.toString(), ws);

    // ws.send(data.toString());
  });
});
