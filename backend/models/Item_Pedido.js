const mongoose = require("mongoose");
const { Schema } = mongoose;

export const OrderItemSchema = new Schema({
  produto: {
    type: Schema.Types.ObjectId,
    ref: "Produto",
    required: true,
  },
  quantidade: {
    type: Number,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
});
