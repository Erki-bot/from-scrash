require("dotenv").config();
const Parse = require("parse/node");
Parse.initialize(process.env.APP_ID);
Parse.serverURL = process.env.SERVER_URL;

const people = new Parse.Object("People");
people.save({ name: "KIKI" }).then(console.log);
console.log("cloud code started");
