const client = require("./database");

const dataMapper = {
  getAllFigurines: async () => {
    const result = await client.query("SELECT * FROM figurine");
    return result.rows;
  },
  getOneFigurine: async (figurineId) => {
    const result = await client.query(
      `SELECT * FROM figurine WHERE id = CAST(${figurineId} AS INTEGER)`
    );
    return result.rows[0];
  },
  getAllFigurineReviews: async () => {
    const result = await client.query(`SELECT * FROM review`);
    return result.rows;
  },
  getFigurineReviews: async (figurineId) => {
    const result = await client.query(
      `SELECT * FROM review WHERE figurine_id = CAST(${figurineId} AS INTEGER)`
    );
    return result.rows;
  },
  getFavoritesFigurine: async (figurineIds) => {
    let SQLRequest = `SELECT * FROM figurine WHERE id = `;
    SQLRequest += `CAST(${figurineIds[0]} AS INTEGER)`;
    for (let i = 1; i < figurineIds.length; i++) {
      SQLRequest += ` OR id = CAST(${figurineIds[i]} AS INTEGER)`;
    }
    console.log(SQLRequest);
    const result = await client.query(SQLRequest);
    return result.rows;
  },
};

module.exports = dataMapper;
