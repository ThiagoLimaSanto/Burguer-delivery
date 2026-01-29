const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const OrderItemSchema = require("./Item_Pedido")

const OrderSchema = new Schema(
  {
    items: [OrderItemSchema],
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