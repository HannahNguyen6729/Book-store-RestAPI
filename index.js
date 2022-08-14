const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routes/author");
dotenv.config();

//connect database
mongoose.connect(process.env.MONGO_DB_URL, () => {
  console.log("connected to MongoDB");
});

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

//ROUTES
app.use("/v1/author", authorRoute);

app.listen(8000, () => {
  console.log("server is running...");
});
