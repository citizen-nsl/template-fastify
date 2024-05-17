import { FastifyInstance } from "fastify";
import { config } from "../../config/config";
import { user } from "../../controllers";
import { rootFunction } from "../../function/root.function";
export default async (fastify: FastifyInstance) => {
    fastify.all('/', rootFunction);
    fastify.post(`/api/v1/user`, user);
};
