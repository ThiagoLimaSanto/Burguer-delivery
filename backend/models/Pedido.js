const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const OrderSchema = new Schema(
  {
    items: [
      {
        produtoId: String,
        nome: String,
        quantidade: Number,
        preco: Number,
      },
    ],
    total: {
      type: Number,
      required: true,
    },
    clienteNome: {
      type: String,
      required: true,
    },
    clienteTelefone: {
      type: String,
      required: true,
    },
    clienteEndereco: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "PENDENTE",
        "PREPARANDO",
        "SAIU_PARA_ENTREGA",
        "ENTREGUE",
        "CANCELADO",
      ],
      default: "PENDENTE",
    },
  },
  { timestamps: true }
);

module.exports = model("Pedido", OrderSchema);