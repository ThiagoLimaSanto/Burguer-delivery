const Pedido = require("../models/Pedido");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = class PedidoController {
  static async listarPedidos(req, res) {
    try {
      const pedidos = await Pedido.find().sort({ createdAt: -1 });
      res.status(200).json({ data: pedidos });
    } catch (error) {
      res.statu(500).json({ message: "Erro ao listar pedidos" });
    }
  }

  static async listarPedidoPorId(req, res) {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID inválido!" });
        return;
      }

      const pedido = await Pedido.findById(id);

      if (!pedido) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }

      res.json({ data: pedido });
    } catch (error) {
      res.status(500).json({ message: "Pedido Inválido" });
    }
  }

  static async criarPedido(req, res) {
    const { items, clienteNome, clienteTelefone, clienteEndereco } = req.body;

    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    try {
      const pedido = await Pedido.create({
        items,
        total,
        clienteNome,
        clienteTelefone,
        clienteEndereco,
      });

      res
        .status(201)
        .json({ message: "Pedido criado com sucesso!", data: pedido });
    } catch (error) {
      res.status(500).json({ message: "Erro ao criar pedido" });
    }
  }

  static async atualizarStatus(req, res) {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID inválido!" });
        return;
      }

      const { status } = req.body;

      const pedido = await Pedido.findByIdAndUpdate(
        id,
        { status },
        { new: true },
      );

      if (!pedido) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }

      res.json({ message: "Status atualizado com sucesso!", data: pedido });
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar status" });
    }
  }

  static async deletarPedido(req, res) {
    try {
      const { id } = req.params;
      if (!ObjectId.isValid(id)) {
        res.status(400).json({ message: "ID inválido!" });
        return;
      }

      const pedido = await Pedido.findById(id);

      if (!pedido) {
        return res.status(404).json({ message: "Pedido não encontrado" });
      }
      
      if (pedido.status === "CANCELADO")
        return res.status(409).json({ message: "O pedido já está cancelado!" });

      pedido.status = "CANCELADO";

      await pedido.save();

      res
        .status(200)
        .json({ message: "Pedido cancelado com sucesso!", data: pedido });
    } catch (error) {
      res.status(500).json({ error: "Erro ao cancelar pedido" });
    }
  }
};
