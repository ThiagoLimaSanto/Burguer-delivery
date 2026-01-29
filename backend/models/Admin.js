const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const Admin = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin"],
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = model("Admin", Admin);
