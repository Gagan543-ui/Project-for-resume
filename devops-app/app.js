const http = require("http");
http.createServer((req, res) => {
  res.end("Hello DevOps from Kubernetes 🚀");
}).listen(3000);

