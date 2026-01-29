const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const createUsuarioToken = require("../helpers/CreateUserToken");

module.exports = class AdminController {
  static async register(req, res) {
    const { name, senha } = req.body;

    try {
      const salt = await bcrypt.genSalt(12);
      const senhaHash = await bcrypt.hash(senha, salt);

      const admin = new Admin({
        name,
        senha: senhaHash,
        role: "admin",
      });

      await admin.save();

      res.status(201).json({
        message: "Admin cadastrado com sucesso!",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Ocorreu um erro, tente novamente mais tarte!" });
    }
  }

  static async login(req, res) {
    const { name, senha } = req.body;

    if (!name || !senha) {
      res.status(422).json({
        message: "Os campos são obrigatórios!",
      });
      return;
    }

    const admin = await Admin.findOne({ name });

    if (!admin || !(await bcrypt.compare(senha, admin.senha))) {
      res.status(404).json({
        message: "Email ou senha inválida!",
      });
      return;
    }

    await createUsuarioToken(admin, req, res);
  }

  static async logout(req, res) {
    res.clearCookie("token", {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });

    res.status(200).json({ message: "Logout realizado com sucesso!" });
  }
};
