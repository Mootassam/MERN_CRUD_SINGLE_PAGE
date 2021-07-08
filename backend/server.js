const express = require("express");
const app = express();
const router = require("./Router/userRouter");
app.use(express.json());
const port = 8080;

// !important!
// you need to install the following libraries |express|[dotenv > if required]
// or run this command >> npm i express dotenv
const cors = require("cors");

app.use("/api", cors(), router);

// required libs : mongoose | colors
// run the following command
// npm i mongoose colors

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log("> Connected..."))
  .catch((err) => console.log(`> Error while connecting to mongoDB :`, err));

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
