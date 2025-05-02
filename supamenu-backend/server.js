const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoute.js");
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/", userRoute);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfuly.");
  });
app.get("/", (req, res) => {
  res.send("Use postman for better experience.");
});

app.listen(PORT, () => {
  console.log(`app running in port ${PORT}`);
});
