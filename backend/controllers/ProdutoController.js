const Produto = require("../models/Produto");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class ProdutoController {
  static async listarProdutos(req, res) {
    try {
      const produtos = await Produto.find({ available: true }).sort({
        name: 1,
      });
      res.status(200).json({ data: produtos });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar os produto." });
    }
  }

  static async listarProdutosAdmin(req, res) {
    try {
      const produtos = await Produto.find().sort({ name: 1 });
      res.status(200).json({ data: produtos });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar os produto." });
    }
  }

  static async criarProduto(req, res) {
    const { name, description, price, image, category } = req.body;
    try {
      const produto = await Produto.create({
        name,
        description,
        price,
        image,
        category,
      });

      res
        .status(201)
        .json({ message: "Produto cadastrado com sucesso!", data: produto });
    } catch (error) {
      res.status(500).json({ message: "Erro ao cadastrar um novo produto." });
    }
  }

  static async atualizarProduto(req, res) {
    const { name, description, price, image, category } = req.body;
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID inválido!" });
        return;
      }

      const produto = await Produto.findByIdAndUpdate(
        id,
        {
          name,
          description,
          price,
          image,
          category,
        },
        { new: true },
      );

      if (!produto)
        return res.status(404).json({ message: "Produto não encontrado!" });

      res
        .status(200)
        .json({ message: "Produto atualizado com sucesso!", data: produto });
    } catch (error) {
      res.status(400).json({ message: "Error ao atualizar o produto!" });
    }
  }

  static async desativarProduto(req, res) {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID inválido!" });
        return;
      }

      const produto = await Produto.findById(id);

      if (!produto)
        return res.status(404).json({ message: "Produto não encontrado!" });

      produto.available = !produto.available;

      await produto.save();

      res
        .status(200)
        .json({ message: "Atualizado o status do produto!", data: produto });
    } catch (error) {
      res.status(500).json({ message: "Erro ao alterar o status do produto!" });
    }
  }
};
