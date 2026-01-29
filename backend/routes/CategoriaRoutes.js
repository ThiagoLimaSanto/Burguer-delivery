const router = require("express").Router();
const CategoriaController = require("../controllers/CategoriaController");

const { validarCategoria } = require("../middlewares/ValidarCampos");

router.post("/", validarCategoria, CategoriaController.criarCategoria);
router.get("/", CategoriaController.listarCategoria);
router.get("/admin", CategoriaController.listarCategoriaAdmin);
router.put(
  "/status/:id",
  validarCategoria,
  CategoriaController.atualizarCategoria,
);
router.delete("/:id", CategoriaController.desativarCategoria);

module.exports = router;
