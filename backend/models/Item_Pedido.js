const mongoose = require("mongoose");
const { Schema } = mongoose;

module.export = OrderItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Produto",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
