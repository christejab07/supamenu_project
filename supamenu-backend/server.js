const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/userRoutes.js");
const clientRoute = require("./routes/clientRoutes.js");
const orderRoute = require("./routes/orderRoutes.js");
const restaurantRoute = require("./routes/restaurantRoutes.js");

dotenv.config();

const PORT = process.env.PORT;
const router = express.Router();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/users", userRoute);
app.use("/api/clients", clientRoute);
app.use("/api/orders", orderRoute);
app.use("/api/restaurants", restaurantRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected successfuly.");
  })
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Use postman for better experience.");
});

app.listen(PORT, () => {
  console.log(`app running in port ${PORT}`);
});
