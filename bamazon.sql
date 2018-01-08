CREATE DATABASE Bamazon_db;

USE Bamazon_db;

CREATE TABLE products(
	item_id INT NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(200) NOT NULL,
	department_name VARCHAR(200) NOT NULL,
	price DECIMAL(10,2) default 0,
	stock_quantity INT default 0,
	PRIMARY KEY(id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Matuse Wetsuit', 'Wetsuits', 400.00, 20);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Rusty Surfboard', 'Boards', 399.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Sharp Eye Surfboard', 'Boards', 499.99, 15);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Merrick Surfboard', 'Boards', 399.99, 10);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Billabong Wetsuit', 'Wetsuits', 119.99, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Oneil Wetsuit', 'Wetsuits', 299.99, 30);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Xcel Wetsuit', 'Wetsuits', 300, 50);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Billabong Boardshorts', 'Boardshorts', 29.99, 100);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Hurley Boardshorts', 'Boardshorts', 19.99, 60);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Sex Wax', 'Surf Wax', 2.50, 200);
INSERT INTO products(product_name, department_name, price, stock_quantity) VALUES ('Sticky Bumps', 'Surf Wax', 3.50, 200);

