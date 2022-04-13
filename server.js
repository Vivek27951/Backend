require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("config");

const dbConfig = config.get("Vivek.dbConfig.dbName");

mongoose.connect(dbConfig);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.listen(3000, () => console.log("Server Started"));
