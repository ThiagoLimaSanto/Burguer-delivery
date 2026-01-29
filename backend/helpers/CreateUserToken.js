const jwt = require("jsonwebtoken");

const createUserToken = (user, req, res) => {
  const token = jwt.sign(
    {
      _id: user._id,
      name: user.name,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "12h" },
  );

  const tempoVida = 12 * 60 * 60 * 1000;

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: tempoVida,
  });

  res.status(200).json({ message: "Você está autenticado!", data: token });
};

module.exports = createUserToken;
