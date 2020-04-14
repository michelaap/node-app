const apm = require("elastic-apm-node");

apm.start({ serviceName: "NodeApp", serverUrl: "http://apm-server:8200" });

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Service running" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(3000);
