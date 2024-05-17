import Logger from "./structure/logger";
import mongoose from "./database/mongoose";
import fastify, {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
} from "fastify";

const log = new Logger("App");
const app: FastifyInstance = fastify({ logger: false });

app.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
  return { hello: "world" };
});

app.listen({ port: 3000 }, (err, address) => {
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
