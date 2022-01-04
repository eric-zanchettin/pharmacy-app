import express from 'express';
import { route } from './routes/index';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(route);

server.listen(5000, () => console.log('⚡ Server is up and Running!'));