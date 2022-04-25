const express = require("express");
const mongoose = require("mongoose");

const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");

const app = express();
const PORT = 3000;

dotenv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected"))
  .catch((err) => console.log("Unable to connect", err));

app.use("/api/users", userRoute);

app.use("/api/pins", pinRoute);

app.listen(PORT, () => {
  console.log("Backend server is running on", PORT);
});
