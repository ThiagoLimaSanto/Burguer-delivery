const router = require("express").Router();
const PedidoController = require("../controllers/PedidoController");

const {
  validarPedido,
  validarItem_pedido,
} = require("../middlewares/ValidarCampos");

router.post(
  "/",
  validarPedido,
  validarItem_pedido,
  PedidoController.criarPedido,
);
router.get("/", PedidoController.listarPedidos);
router.get("/:id", PedidoController.listarPedidoPorId);
router.patch("/status/:id", PedidoController.atualizarStatus);
router.delete("/:id", PedidoController.deletarPedido);

module.exports = router;
