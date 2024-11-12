const db = require("../../../database/databaseConfig");

const GetCredencial = async (username) => {
  const result = await db.query(
    "SELECT username, password FROM usuarios WHERE username = $1 AND deleted = false",
    [username]
  );
  return result.rows[0]; 
};

module.exports = {
  GetCredencial,
};
