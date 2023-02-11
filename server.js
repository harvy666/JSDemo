//controller feletti réteg?

const express = require("express");
const roomRoutes = require("./src/rooms/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/rooms", roomRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));