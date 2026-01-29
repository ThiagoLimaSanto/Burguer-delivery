const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true },
);

module.exports = model("Categoria", CategorySchema);
