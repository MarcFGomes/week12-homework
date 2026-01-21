# Inventory Management CLI (PostgreSQL)

A Node.js command-line inventory management application built with Inquirer, PostgreSQL, and pg.
This app allows users to manage products, suppliers, and inventory levels directly from the terminal.

Codecademy Full-Stack Bootcamp — Week 12 Challenge
![Watch Video](./Assets/demo.gif)

## 📦 Features

- View all products
- View low-inventory items
- View suppliers
- Add suppliers
- Add products
- Update product details (price, category, supplier)
- Restock products
- Record sales
- Delete products

All data is stored and managed in a PostgreSQL database.

## 🛠️ Tech Stack

- Node.js
- PostgreSQL
- pg (Postgres client)
- Inquirer (CLI prompts)
- Express (included, not required for CLI)
- Nodemon (development)

## 📁 Project Structure
```
week12-homework/
│
├── db/ # Database files
│ ├── schema.sql # Table definitions
│ └── seed.sql # Initial seed data
│
├── src/ # Application source code
│ ├── index.js # CLI control loop
│ ├── ui.js # Inquirer prompts and menus
│ └── queries.js # PostgreSQL queries
│
├── server.js # Application entry point
├── package.json
├── package-lock.json
├── Instructions.md
└── README.md

```

## ⚙️ Prerequisites

Make sure you have:
- Node.js (v18+ recommended)
- PostgreSQL running locally
- pgAdmin or psql access

## 🗄️ Database Setup

- Open pgAdmin
- Create a database
- Open the Query Tool
- Run the contents of schema.sql and seed.sql

This will:
- Create all required tables
- Insert initial suppliers and products

## 🔐 Database Configuration

Edit src/queries.js:

const pool = new Pool({
  user: 'postgres',
  password: 'YOUR_POSTGRES_PASSWORD',
  host: 'localhost',
  database: 'inventory_db',
  port: 5432
});


## ⚠️ Make sure:

- Password is correct
- Port is 5432 (Postgres, not Express)

## ▶️ Running the App

Install dependencies:
npm install

Start the CLI:
npm start
Or with nodemon:
npm run dev

You will see an interactive menu in your terminal.


## 👤 Author

Marc Gomes
Codecademy Full-Stack Bootcamp