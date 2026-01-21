const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'PASSWORD123+',
  host: 'localhost',
  database: 'homework',
  port: 5432
});

module.exports = {
  getProducts() {
    return pool.query(`
      SELECT p.id, p.name, p.category, p.price, p.quantity, s.name AS supplier
      FROM products p
      LEFT JOIN suppliers s ON p.supplier_id = s.id
      ORDER BY p.id;
    `);
  },

  getLowInventory() {
    return pool.query(`
      SELECT * FROM products
      WHERE quantity < 5;
    `);
  },

  getSuppliers() {
    return pool.query(`SELECT * FROM suppliers ORDER BY id;`);
  },

  addSupplier({ name, email, phone }) {
    return pool.query(
      `INSERT INTO suppliers (name, email, phone)
       VALUES ($1, $2, $3);`,
      [name, email, phone]
    );
  },

  addProduct({ name, category, price, quantity, supplier_id }) {
    return pool.query(
      `INSERT INTO products (name, category, price, quantity, supplier_id)
       VALUES ($1, $2, $3, $4, $5);`,
      [name, category, price, quantity, supplier_id]
    );
  },

  updateQuantity(id, amount) {
    return pool.query(
      `UPDATE products
       SET quantity = quantity + $1
       WHERE id = $2
       AND quantity + $1 >= 0;`,
      [amount, id]
    );
  },

  updateProduct(id, field, value) {
    return pool.query(
      `UPDATE products SET ${field} = $1 WHERE id = $2;`,
      [value, id]
    );
  },

  deleteProduct(id) {
    return pool.query(`DELETE FROM products WHERE id = $1;`, [id]);
  }
};