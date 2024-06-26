const express = require("express");
const routes = require("./routes/index");
const cors = require("cors");

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Servidor Express.js rodando em http://localhost:${port}`);
});
