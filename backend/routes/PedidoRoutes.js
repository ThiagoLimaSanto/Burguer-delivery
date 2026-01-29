const router = require("express").Router();
const PedidoController = require("../controllers/PedidoController");

const { validarPedido } = require("../middlewares/ValidarCampos");

router.post("/", validarPedido, PedidoController.criarPedido);
router.get("/", PedidoController.listarPedidos);
router.get("/:id", PedidoController.listarPedidoPorId);
router.put("/status/:id", validarPedido, PedidoController.atualizarStatus);
router.delete("/:id", PedidoController.deletarPedido);

module.exports = router;
