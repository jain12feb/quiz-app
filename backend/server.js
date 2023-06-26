const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

const questionRoute = require("./routes/question");

app.use("/api/v1", questionRoute);

app.use("/api", async (req, res) => {
  res.send("api is working");
});

const PORT = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URI)
  .then((conn) => {
    console.log(
      `Database connected to ${conn.connection.host}:${conn.connection.port} with DB: ${conn.connection.name}`
    );
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port " + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
