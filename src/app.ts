import Logger from "./structure/logger";
import mongoose from "./database/mongoose";
import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import autoload from '@fastify/autoload'
import path from 'path';
const log = new Logger("App");
const app: FastifyInstance = fastify({ logger: false });

app.register(import('@fastify/cors'), {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowedHeaders: [
    'Content-Type', 
    'Authorization',
    'Access-Control-Allow-Origin',
    'Access-Control-Allow-Headers',
  ]
});

app.addHook("onRequest", (request: FastifyRequest, reply: FastifyReply, done) => {
  reply.headers({
    'X-Powered-By': ['PHP/5.3.29', 'PleskLin', 'XNXX'],
    'Server': 'Apache/2.4.52 (Win64) OpenSSL/1.1.1m PHP/5.3.29'
  });
  done();
});

app.register(autoload, {
  dir: path.join(__dirname, 'routes'),
  options: Object.assign({}, {}),
});


app.listen({ port: 3000, host: '0.0.0.0' }, (err: Error, address: string) => {
  if (err) {
    log.error(err);
    process.exit(1);
  }

  log.info(`Desing Patterns in TypeScript`);
  log.info(`Service API running on ${address}`);

  mongoose().then((db) => {
    log.info("Mongoose connection successful", db.host);
  });
});
