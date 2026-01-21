const inquirer = require("inquirer");



//Question for user
const questions = [
  {
    name: "option",
    type: "list",
    message:"What do you want to do next",
    choices: [
        "View all products", 
        "View low inventory", 
        "View all suppliers",
        "Add a product",
        "Add a supplier", 
        "Restock a product (increase quantity)", 
        "Record a sale (decrease quantity)", 
        "Update a product (price, supplier, category)", 
        "Delete a product", "Exit"],
  }
  ];



class CLI {
  run() {
    return inquirer
      .prompt(questions)
      .then(({ option }) => {
        let nextStep;
        switch (option) {
          case "View all products":
            pool.query('SELECT * FROM products', function (err, { rows }) {
  console.log(rows);
});
            break;

          case "View low inventory":
            nextStep  = new Square();
            break;

            case "View all suppliers":
            nextStep  = new Square();
            break;

             case "Add a product":
            nextStep  = new Square();
            break;

            case "Add a supplier":
            nextStep  = new Square();
            break;

            case "Restock a product (increase quantity)":
            nextStep  = new Square();
            break;

            case "Record a sale (decrease quantity)":
            nextStep  = new Square();
            break;

            case "Update a product (price, supplier, category)":
            nextStep  = new Square();
            break;

            case "Delete a product":
            nextStep  = new Square();
            break;

            case "Exit":
            nextStep  = new Square();
            break;


          default:
            nextStep = new Triangle();
            break;
        }
        shape.setColor(shapeColor);

        const svg = new SVG();
        svg.setText(text, textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log(chalk.green("✅ Generated logo.svg"));
      })
      .catch((error) => {
        console.log(chalk.red("❌ Oops! Something went wrong."));
        console.log(chalk.red("Reason:", err.message || err));
        process.exit(1);
      });
  }
}

module.exports = CLI;