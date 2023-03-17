import fastify from "fastify";

const server = fastify();

server.get("/ping", async (request, reply) => {
  return "pong";
});
