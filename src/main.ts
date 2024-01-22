// eslint-disable-next-line no-undef
const server = Bun.serve({
  port: 3000,
  // eslint-disable-next-line no-unused-vars
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
