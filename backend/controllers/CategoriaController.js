const Categoria = require("../models/Categoria");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class CategoriaController {
  static async listarCategoria(req, res) {
    try {
      const categorias = await Categoria.find({ available: true }).sort({
        name: 1,
      });
      res.status(200).json({ data: categorias });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar categorias!" });
    }
  }

  static async listarCategoriaAdmin(req, res) {
    try {
      const categorias = await Categoria.find().sort({
        createdAt: -1,
      });
      res.status(200).json({ data: categorias });
    } catch (error) {
      res.status(500).json({ message: "Erro ao listar categorias!" });
    }
  }

  static async criarCategoria(req, res) {
    const { name } = req.body;
    try {
      const existe = await Categoria.findOne({ name });
      if (existe)
        return res.status(400).json({ message: "Categoria já existe!" });

      const categoria = await Categoria.create({ name });

      res
        .status(201)
        .json({ message: "Categoria criada com sucesso!", data: categoria });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar uma nova categoria!" });
    }
  }

  static async atualizarCategoria(req, res) {
    const { name } = req.body;
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID inválido!" });
        return;
      }

      const categoria = await Categoria.findByIdAndUpdate(
        id,
        { name },
        { new: true },
      );

      if (!categoria)
        return res.status(404).json({ message: "Categoria não encontrada!" });

      res.status(200).json({
        message: "Categoria atualizada com sucesso!",
        data: categoria,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao atualizar uma categoria!" });
    }
  }

  static async desativarCategoria(req, res) {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID inválido!" });
        return;
      }

      const categoria = await Categoria.findById(id);

      if (!categoria)
        return res.status(404).json({ message: "Categoria não encontrada!" });

      categoria.available = !categoria.available;

      await categoria.save();

      res.status(200).json({
        message: "Categoria desativada com sucesso!",
        data: categoria,
      });
    } catch (error) {
      res.status(500).json({ message: "Erro ao desativar uma categoria!" });
    }
  }
};
