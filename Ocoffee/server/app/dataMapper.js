const database = require("./database");

const dataMapper = {
  getAllCoffees: async () => {
    const result = await database.query(`SELECT * FROM coffees`);
    return result.rows;
  },
  getOneCoffee: async (id) => {
    const result = await database.query(
      `SELECT *, TO_CHAR(date_of_insertion, 'DD/MM/YYYY') AS date_of_insertion FROM coffees WHERE id = CAST (${id} AS INTEGER)`
    );
    return result.rows[0];
  },
  addOneCoffee: async (newCoffee) => {
    await database.query(
      `INSERT INTO coffees ("name", "description", "reference", "origin", "price_per_kg", "main_characteristic", "available", "picture_url", "new_product")
      VALUES ('${newCoffee.name}', '${newCoffee.description}', CAST(${newCoffee.reference} AS INTEGER), '${newCoffee.origin}', CAST(${newCoffee.price_per_kg} AS NUMERIC), '${newCoffee.main_characteristic}', ${newCoffee.available}, '${newCoffee.picture_url}', ${newCoffee.new_product});
      `
    );
  },
  deleteOneCoffee: async (id) => {
    await database.query(
      `DELETE FROM coffees WHERE id = CAST (${id} AS INTEGER)`
    );
  },
  updateOneCoffee: async (updatedCoffee) => {
    await database.query(
      `UPDATE coffees SET name = '${updatedCoffee.name}', description = '${updatedCoffee.description}', reference = CAST(${updatedCoffee.reference} AS INTEGER), origin = '${updatedCoffee.origin}', price_per_kg = CAST(${updatedCoffee.price_per_kg} AS NUMERIC), main_characteristic = '${updatedCoffee.main_characteristic}', available = ${updatedCoffee.available}, picture_url = '${updatedCoffee.name}', new_product = ${updatedCoffee.name} WHERE id = CAST (${updatedCoffee.id} AS INTEGER)`
    );
  },
  getCoffeesInCart: async (cart) => {
    let query = `SELECT * FROM coffees WHERE id = CAST (${cart[0]} AS INTEGER)`;
    for (let i = 1; i < cart.length; i++) {
      query += `OR id = CAST (${cart[i]} AS INTEGER)`;
    }
    const result = await database.query(query);
    return result.rows;
  },
  getNewCoffees: async () => {
    const result = await database.query(
      `SELECT * FROM coffees WHERE new_product = true`
    );
    return result.rows;
  },
  getUser: async (login, password) => {
    const result = await database.query(
      `SELECT * FROM users WHERE login = '${login}' AND password = '${password}'`
    );
    return result.rows[0];
  },
  createUser: async (login, password) => {
    await database.query(
      `INSERT INTO users ("login" , "password", "role") VALUES ('${login}', '${password}', 'user')`
    );
  },
  getAllMessages: async () => {
    const result = await database.query(
      `SELECT *, TO_CHAR(date_of_contact, 'DD/MM/YYYY') AS date_of_contact FROM contact`
    );
    return result.rows;
  },
  addNewMessage: async (message) => {
    await database.query(
      `INSERT INTO contact ("first_name", "last_name", "email", "message_object", "message_content")
      VALUES ('${message.first_name}', '${message.last_name}', '${message.email}', '${message.message_object}', '${message.message_content}');
      `
    );
  },
};

module.exports = dataMapper;
