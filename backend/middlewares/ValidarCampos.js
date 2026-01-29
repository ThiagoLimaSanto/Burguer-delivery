const validarPedido = (req, res, next) => {
  const { items, clienteNome, clienteTelefone, clienteEndereco } = req.body;

  if (!items || !clienteNome || !clienteTelefone || !clienteEndereco) {
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

const validarItem_pedido = (req, res, next) => {
  const { items } = req.body;
  if (!items || !Array.isArray(items) || items.length === 0) {
    return res
      .status(422)
      .json({ message: "O pedido precisa ter pelo menos um item!" });
  }

  for (const item of items) {
    const { product, quantity, price } = item;
    if (!product || quantity == null || price == null) {
      return res.status(422).json({
        message: "Todos os campos é obrigatorio!",
      });
    }

    if (quantity <= 0) {
      return res
        .status(422)
        .json({ message: "A quantidade deve ser maior que zero!" });
    }

    if (price < 0) {
      return res
        .status(422)
        .json({ message: "O preço não pode ser negativo!" });
    }
  }

  next();
};

module.exports = {
  validarPedido,
  validarProduto,
  validarCategoria,
  validarItem_pedido,
};
