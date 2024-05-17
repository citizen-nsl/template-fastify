import { FastifyRequest, FastifyReply } from "fastify";

export async function rootFunction(req: FastifyRequest, res: FastifyReply) {
    return { status: 'ok' }
}