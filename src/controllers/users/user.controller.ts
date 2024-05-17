import { FastifyRequest, FastifyReply } from "fastify";


// type LoginReqType = FastifyRequest<{
//     Body: {
//         phone: string
//         deviceId: string
//         pin: string
//     }
// }>
export async function user(req: FastifyRequest, res: FastifyReply) {
    res.send({
        code: 1,
        message: "Success",
    })
}