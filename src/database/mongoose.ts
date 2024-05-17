import mongoose, { Connection } from "mongoose";
import Logger from "../structure/logger";
import { database } from "../config/config.database";
const log = new Logger("Mongoose");
export default async () => {
  await mongoose.connect(database.mongodb.uri);
  const db: Connection = mongoose.connection;

  db.on("error", (err) => {
    log.error(`Mongoose connection error: ${err}`);
  });

  db.once("open", () => {
    log.info("Mongoose connection successful", db.host);
  });

  db.on("disconnected", () => {
    log.warn("Mongoose connection disconnected");
  });

  return db;
};
