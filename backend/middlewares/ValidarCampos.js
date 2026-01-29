const validarPedido = (req, res, next) => {
  const { items, total, clienteNome, clienteTelefone, clienteEndereco } =
    req.body;

  if (
    !items ||
    !total ||
    !clienteNome ||
    !clienteTelefone ||
    !clienteEndereco
  ) {
    return res.status(422).json({
      message: "Os campos são obrigatórios!",
    });
  }
  next();
};

const validarProduto = (req, res, next) => {
  const { name, description, price, category } = req.body;

  if (!name || !price || !description || !category)
    return res.status(422).json({ message: "Os campos são obrigatórios!" });

  next();
};

const validarCategoria = (req, res, next) => {
  const { name } = req.body;

  if (!name)
    return res.status(422).json({ message: "Nome é um campo obrigatório!" });

  next();
};

module.exports = { validarPedido, validarProduto, validarCategoria};
