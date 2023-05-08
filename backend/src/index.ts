import fastify from "fastify";
import websocket from "@fastify/websocket";

const server = fastify();

server.register(websocket);

server.register(async function (fastify) {
  fastify.get("/ws", { websocket: true }, (connection, _) => {
    connection.socket.on("message", (message) => {
      console.log(`Received ${message}`);
      connection.socket.send("hello from fastify!");
    });

    connection.socket.on("close", (code, reason) => {
      console.log(`Connection closed with ${code} and reason ${reason}`);
    });
  });
});

server.get("/", async () => {
  return "Hello, World!";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
