const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../../../database/databaseConfig");
require("dotenv").config();

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.query(
      "SELECT * FROM usuarios WHERE username = $1",
      [username]
    );
    if (result.rows.length === 0) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const user = result.rows[0];
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    if (!process.env.SECRET_API) {
      return res.status(500).json({ message: 'Chave secreta não definida' });
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET_API, { expiresIn: '1h' });
    res.json({ auth: true, token });
  } catch (error) {
    console.error('Erro ao processar login:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};
