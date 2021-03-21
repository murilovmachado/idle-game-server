import express from 'express';
import http from 'http';
import { Server, ServerOptions } from 'socket.io';

const app = express();
const PORT = 8000;


app.get('/', (req, res) => res.send('Express + TypeScript Server'));

const server = http.createServer(app);
const serverOptions: Partial<ServerOptions> = {
  cors: {
    origin: 'http://localhost:8080',
    credentials: true,
  },
  transports: ['polling', 'websocket'],
  allowEIO3: true,
};

const io = new Server(server, serverOptions);

io.on('connection', (socket: any) => {
  console.log("a user connected");

  socket.on('message', (message: any) => {
    console.log(message);
    socket.emit('server', `Got your message: ${message}`);
  });
});

server.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
