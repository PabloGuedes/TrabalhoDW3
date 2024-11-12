const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  jwt.verify(token, process.env.SECRET_API, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido ou expirado" });
    }

    req.userId = decoded.id;
    next();
  });
};

module.exports = authenticateToken;
