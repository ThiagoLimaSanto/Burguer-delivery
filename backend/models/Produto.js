const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    image: String,

    category: {
      type: Schema.Types.ObjectId,
      ref: "Categoria",
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = model("Produto", ProductSchema);
