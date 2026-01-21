const inquirer = require('inquirer');
const db = require('./queries');

async function mainMenu() {
  return inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'Choose an action:',
    choices: [
      'View all products',
      'View low inventory',
      'View all suppliers',
      'Add a product',
      'Add a supplier',
      'Restock a product',
      'Record a sale',
      'Update a product',
      'Delete a product',
      'Exit'
    ]
  });
}

async function selectProduct() {
  const { rows } = await db.getProducts();
  return inquirer.prompt({
    type: 'list',
    name: 'productId',
    message: 'Select a product:',
    choices: rows.map(p => ({
      name: `${p.name} (Qty: ${p.quantity})`,
      value: p.id
    }))
  });
}

module.exports = {
  mainMenu,
  selectProduct
};