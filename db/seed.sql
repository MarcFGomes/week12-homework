
INSERT INTO suppliers (name, email, phone)
VALUES
  ('Sonae MC Electronics', 'fornecedores@sonaemc.pt', '+351 21 000 1001'),
  ('Worten Distribuição', 'compras@worten.pt', '+351 21 000 1002'),
  ('PCDiga Wholesale', 'wholesale@pcdiga.com', '+351 21 000 1003'),
  ('Chip7 Distribuição', 'b2b@chip7.pt', '+351 21 000 1004'),
  ('Infordata Sistemas', 'sales@infordata.pt', '+351 21 000 1005'),
  ('JP Sá Couto (Insys)', 'procurement@insys.pt', '+351 21 000 1006');

INSERT INTO products (name, category, price, quantity, supplier_id)
VALUES
  ('Wireless Mouse', 'Electronics', 19.99, 14, 2),
  ('Mechanical Keyboard', 'Electronics', 74.99, 5, 2),
  ('USB-C Cable (1m)', 'Electronics', 8.49, 32, 3),
  ('27-inch LED Monitor', 'Electronics', 189.90, 2, 3),
  ('Laptop Stand', 'Electronics', 27.50, 8, 3),

  ('Desktop PC Office Model', 'Computers', 549.00, 3, 6),
  ('Laptop Business Series', 'Computers', 899.00, 1, 6),
  ('SSD 1TB NVMe', 'Components', 89.99, 11, 5),
  ('DDR4 RAM 16GB', 'Components', 64.50, 9, 5),
  ('Power Supply 650W', 'Components', 79.00, 4, 5),

  ('Network Switch (8-port)', 'Networking', 49.99, 6, 4),
  ('Wireless Router AX3000', 'Networking', 119.00, 2, 4),
  ('Ethernet Cable CAT6 (5m)', 'Networking', 6.99, 25, 4),

  ('Laser Printer Mono', 'Office Electronics', 159.00, 2, 1),
  ('Printer Toner Black', 'Office Electronics', 68.90, 0, 1),
  ('UPS Battery Backup 1200VA', 'Office Electronics', 199.00, 3, 1);