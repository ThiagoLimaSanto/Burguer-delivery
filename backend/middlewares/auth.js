const jwt = require("jsonwebtoken");
const getToken = require("../helpers/getToken");

const VerifyToken = (req, res, next) => {
  const token = getToken(req);

  if (!token) {
    return res.status(401).json({ message: "Acesso negado!" });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token inválido ou expirado!" });
  }
};

const checkTokenRole = (role) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(403).json({ message: "Acesso negado!" });
    }

    const { role: userRole } = req.user;

    if (role.includes(userRole)) {
      next();
    } else {
      return res.status(403).json({
        message: `Acesso negado! Rota Exclusiva.`,
      });
    }
  };
};

module.exports = { VerifyToken, checkTokenRole };
