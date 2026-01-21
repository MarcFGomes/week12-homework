# 12 SQL Challenge: Inventory Management Tracker (CLI + PostgreSQL)

## Your Task

In this challenge, you will build a **command-line Inventory Management App** that lets a business owner (or store manager) **view and manage products, suppliers, and stock levels** stored in a PostgreSQL database.

This is a real-world example of a **content management system (CMS)**—a tool that helps non-developers interact with database data in a friendly way.

You will build the app from scratch using:

- **Node.js**
- **Inquirer v8.2.4** (required)
- **PostgreSQL** (system of record)
- **pg** (node-postgres) to run SQL queries

> ✅ Install the required Inquirer version:
>
> ```sh
> npm i inquirer@8.2.4
> ```

Because this application is not deployed, you must also record a **walkthrough video** demonstrating functionality and acceptance criteria.

---

## Why This Project Matters

Inventory is a perfect use case for SQL because it requires:

- **Accurate data** (PostgreSQL is the “source of truth”)
- **Relationships** between tables (products ↔ suppliers ↔ transactions)
- **Aggregate queries** (`SUM`, `COUNT`, `GROUP BY`) for stock and reporting
- Real business logic: you can’t “sell” an item you don’t have

---

## User Story

```md
AS A store owner
I WANT to view and manage products, suppliers, and inventory levels
SO THAT I can track stock, restock items, and prevent running out of key products
```

---

## Acceptance Criteria

```md
GIVEN a command-line inventory app that accepts user input
WHEN I start the application
THEN I am presented with a menu of options such as:
  - View all products
  - View low inventory
  - View all suppliers
  - Add a product
  - Add a supplier
  - Restock a product (increase quantity)
  - Record a sale (decrease quantity)
  - Update a product (price, supplier, category)
  - Delete a product
  - Exit

WHEN I choose View all products
THEN I see a formatted table including:
  product id, product name, category, price, quantity, and supplier name

WHEN I choose View low inventory
THEN I see only products with quantity below a threshold (ex: < 5)

WHEN I choose View all suppliers
THEN I see a formatted table including supplier id, supplier name, phone/email (or contact)

WHEN I choose Add a supplier
THEN I am prompted for supplier information and it is saved to the database

WHEN I choose Add a product
THEN I am prompted for product name, category, price, starting quantity, and supplier
AND that product is added to the database

WHEN I choose Restock a product
THEN I select a product and enter an amount to increase quantity
AND the database reflects the updated quantity

WHEN I choose Record a sale
THEN I select a product and enter an amount to decrease quantity
AND the app prevents the quantity from going below 0
AND the database reflects the updated quantity

WHEN I choose Update a product
THEN I can modify product fields (price/category/supplier)
AND the changes are saved to the database

WHEN I choose Delete a product
THEN the product is removed from the database (or marked inactive, if you choose soft delete)
```

---

## Recommended Database Schema (PostgreSQL)

You can use this as your baseline design. You may extend it if you want bonus features.

### `suppliers`
- `id`: `SERIAL PRIMARY KEY`
- `name`: `VARCHAR(60) UNIQUE NOT NULL`
- `email`: `VARCHAR(100)`
- `phone`: `VARCHAR(30)`

### `products`
- `id`: `SERIAL PRIMARY KEY`
- `name`: `VARCHAR(60) UNIQUE NOT NULL`
- `category`: `VARCHAR(40) NOT NULL`
- `price`: `DECIMAL(10,2) NOT NULL`
- `quantity`: `INTEGER NOT NULL DEFAULT 0`
- `supplier_id`: `INTEGER REFERENCES suppliers(id) ON DELETE SET NULL`

> 💡 Tip: Keeping `quantity` on the `products` table makes the MVP simpler.
> Later (bonus), you can add a transaction table to compute quantity from history.

---

## Getting Started

### Required packages

- `pg`
- `inquirer@8.2.4`

### Suggested file structure

```
inventory-tracker/
  db/
    schema.sql
    seeds.sql
  src/
    index.js
    queries.js
    ui.js
  package.json
  README.md
```

### Suggested approach

1. Build your database schema (`schema.sql`)
2. Add seed data (`seeds.sql`) to speed up testing
3. Implement the CLI menu with Inquirer
4. Add query functions (SELECT/INSERT/UPDATE/DELETE)
5. Use `console.table()` to display results cleanly

---

## Bonus Ideas

Pick any of the following:

- Track inventory history using a `transactions` table (restock vs sale)
- Add a “View inventory value by category” report (SUM(price * quantity) GROUP BY category)
- Add “View products by supplier”
- Add soft deletes (mark inactive instead of deleting)
- Add validation:
  - price must be positive
  - quantity must be >= 0
  - supplier must exist

---

## Review

You are required to submit BOTH:

- The GitHub repository URL with a unique name and a high-quality README

