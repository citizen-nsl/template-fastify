import { FastifyInstance } from 'fastify';
import { rootFunction } from '../function/root.function';

export default async (fastify: FastifyInstance) => {
  fastify.get('/', rootFunction)
}