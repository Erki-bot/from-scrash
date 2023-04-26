const express = require("express");
const ParseServer = require("parse-server").ParseServer;
const ParseDash = require("parse-dashboard");
const app = express();
require("dotenv").config();
const server = new ParseServer({
  databaseURI: process.env.MONGOBD_URI, // Connection string for your MongoDB database
  cloud: "./cloud/main.js", // Path to your Cloud Code
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY, // Keep this key secret!
  fileKey: "optionalFileKey",
  serverURL: process.env.SERVER_URL, // Don't forget to change to https if needed
});
var options = { allowInsecureHTTP: true };
// Start server
const dashboard = new ParseDash({
  apps: [
    {
      masterKey: process.env.MASTER_KEY, // Keep this key secret!
      serverURL: process.env.SERVER_URL, // Don't forget to change to https if needed
      appId: process.env.APP_ID,
      appName: "Test",
    },
  ],
  options
});
// Serve the Parse API on the /parse URL prefix
app.use("/parse", server.app);
app.use("/dash", dashboard);
app.listen(1337, async function () {
  await server.start();
  console.log("parse-server-example running on port 1337.");
});
