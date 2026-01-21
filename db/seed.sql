INSERT INTO suppliers (id, name, email, phone)
VALUES
  (1, 'Tony Montana', 'scarface@cuban.com', '646-6666666'),
  (2, 'Pablito', 'escobar@colombian.com', '646-6666667'),
  (3, 'Sito', 'minianco@gallego.com', '646-6666668'),
  (4, 'Chapo', 'elchapo@mexican.com', '646-6666669'),
  (5, 'El Patron', 'patron@andes.com', '646-6666670'),
  (6, 'Don Vito', 'corleone@sicilian.com', '646-6666671'),
  (7, 'Big Mike', 'mike@brooklyn.com', '646-6666672'),
  (8, 'La Reina', 'reina@ibiza.com', '646-6666673');

INSERT INTO products (id, name, category, price, quantity, supplier_id)
VALUES
  (1, 'Yeyo', 'Powder', 50.10, 2, 1),
  (2, 'Blow', 'Powder', 10.00, 3, 2),
  (3, 'Farina', 'Flour', 20.31, 4, 3),
  (4, 'Snow', 'Flour', 30.40, 6, 4),
  (5, 'Sugar Rush', 'Powder', 15.75, 12, 5),
  (6, 'White Gold', 'Powder', 99.99, 1, 1),
  (7, 'Fine Grain', 'Flour', 8.50, 25, 3),
  (8, 'Ice Dust', 'Powder', 42.00, 0, 2),
  (9, 'Soft Mix', 'Flour', 5.25, 18, 6),
  (10, 'Premium Batch', 'Powder', 120.00, 5, 7),
  (11, 'Daily Use', 'Flour', 3.99, 40, 8),
  (12, 'Midnight Snow', 'Powder', 65.00, 7, 4);