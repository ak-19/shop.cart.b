const express = require("express");
const bodyParser = require("body-parser");
require("./startdatabase");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productRouter = require("./routes/product");
const cartRouter = require("./routes/cart");

app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);

const serverPort = process.env.PORT || 3001;

app.listen(serverPort, () =>
  console.log(`Server is listening at port ${serverPort}`)
);
