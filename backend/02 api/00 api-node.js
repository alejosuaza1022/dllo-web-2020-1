const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.end("<h1>Hello world!</h1>");
});

/**
 * Este es para la escucha del socket
 */
server.on("hola", socket => {
  res.end("Estoy en un socket");
});

server.listen(3000, "127.0.0.1", () => {
  console.log(`El API en nodejs esta corriendo en: http://127.0.0.1:3000`);
});
