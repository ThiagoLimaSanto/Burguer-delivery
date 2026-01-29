const express = require("express");
const conn = require("./db/conn");
const cors = require("cors");
const PedidoRouter = require("./routes/PedidoRoutes");
const ProdutoRouter = require("./routes/ProdutoRoutes");
const CategoriaRouter = require("./routes/CategoriaRoutes");

const app = express();
const port = 5000;

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  }),
);

app.use("/pedido", PedidoRouter);
app.use("/produto", ProdutoRouter);
app.use("/categoria", CategoriaRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
