const express = require("express");

const app = express();
const port = Number(process.env.PORT || 8000);
const serverName = process.env.SERVER_NAME || `backend-${port}`;

let activeConnections = 0;

function buildPayload(message) {
  return {
    message,
    server: serverName,
    port,
    activeConnections,
    time: new Date().toISOString()
  };
}

function sendJson(res, message) {
  activeConnections = Math.max(0, activeConnections - 1);
  res.json(buildPayload(message));
}

app.get("/health", (req, res) => {
  activeConnections++;
  sendJson(res, "Health check ok");
});

app.get("/slow", (req, res) => {
  activeConnections++;
  setTimeout(() => {
    sendJson(res, "Slow response from backend server");
  }, 10000);
});

app.get("/", (req, res) => {
  activeConnections++;
  sendJson(res, "Response from backend server");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port} (${serverName})`);
});
