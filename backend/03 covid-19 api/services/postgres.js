const { Pool } = require("pg");

class ServicioPG {
  constructor() {
    this.pool = new Pool({
      user: "postgres",
      host: "localhost",
      database: "covid-19",
      password: "",
      port: 5432
    });
  }

  async ejecutarSql(sql) {
    let respuesta = await this.pool.query(sql);
    return respuesta;
  }
}

module.exports = ServicioPG;
