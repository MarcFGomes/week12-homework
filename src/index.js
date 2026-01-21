const ui = require('./ui');
const db = require('./queries');

async function start() {
  while (true) {
    const { action } = await ui.mainMenu();

    if (action === 'Exit') {
      console.log('Goodbye!');
      process.exit();
    }

    if (action === 'View all products') {
      const { rows } = await db.getProducts();
      console.table(rows);
    }

    if (action === 'View low inventory') {
      const { rows } = await db.getLowInventory();
      console.table(rows);
    }

    if (action === 'View all suppliers') {
      const { rows } = await db.getSuppliers();
      console.table(rows);
    }

    if (action === 'Add a supplier') {
      const answers = await require('inquirer').prompt([
        { name: 'name', message: 'Supplier name:' },
        { name: 'email', message: 'Email:' },
        { name: 'phone', message: 'Phone:' }
      ]);
      await db.addSupplier(answers);
      console.log('Supplier added.');
    }

    if (action === 'Add a product') {
      const suppliers = await db.getSuppliers();
      const answers = await require('inquirer').prompt([
        { name: 'name', message: 'Product name:' },
        { name: 'category', message: 'Category:' },
        { name: 'price', message: 'Price:' },
        { name: 'quantity', message: 'Starting quantity:' },
        {
          type: 'list',
          name: 'supplier_id',
          message: 'Supplier:',
          choices: suppliers.rows.map(s => ({ name: s.name, value: s.id }))
        }
      ]);
      await db.addProduct(answers);
      console.log('Product added.');
    }

    if (action === 'Restock a product') {
      const { productId } = await ui.selectProduct();
      const { amount } = await require('inquirer').prompt({
        name: 'amount',
        message: 'Amount to add:',
        validate: v => v > 0
      });
      await db.updateQuantity(productId, amount);
      console.log('Stock updated.');
    }

    if (action === 'Record a sale') {
      const { productId } = await ui.selectProduct();
      const { amount } = await require('inquirer').prompt({
        name: 'amount',
        message: 'Amount sold:',
        validate: v => v > 0
      });
      await db.updateQuantity(productId, -amount);
      console.log('Sale recorded.');
    }

    if (action === 'Update a product') {
      const { productId } = await ui.selectProduct();
      const { field, value } = await require('inquirer').prompt([
        {
          type: 'list',
          name: 'field',
          choices: ['price', 'category', 'supplier_id']
        },
        { name: 'value', message: 'New value:' }
      ]);
      await db.updateProduct(productId, field, value);
      console.log('Product updated.');
    }

    if (action === 'Delete a product') {
      const { productId } = await ui.selectProduct();
      await db.deleteProduct(productId);
      console.log('Product deleted.');
    }
  }
}


module.exports = start;