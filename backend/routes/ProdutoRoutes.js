const router = require("express").Router();
const ProdutoController = require("../controllers/ProdutoController");

const { validarProduto } = require("../middlewares/ValidarCampos");

router.post("/", validarProduto, ProdutoController.criarProduto);
router.get("/", ProdutoController.listarProdutos);
router.get("/admin", ProdutoController.listarProdutosAdmin);
router.put("/status/:id", validarProduto, ProdutoController.atualizarProduto);
router.delete("/:id", ProdutoController.desativarProduto);

module.exports = router;
