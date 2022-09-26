DROP TABLE IF EXISTS vegetables CASCADE;
DROP TABLE IF EXISTS sales CASCADE;

CREATE TABLE vegetables
(
	id INT PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	variety VARCHAR(50) NOT NULL,
	primary_color VARCHAR(20) NOT NULL,
	life_time INT NOT NULL,
	fresh INT NOT NULL
);

CREATE TABLE sales
(
	sale_id INT PRIMARY KEY,
	sale_date DATE NOT NULL,
	sale_weight INT NOT NULL,
	sale_unit_price DECIMAL NOT NULL,
	sale_active INT NOT NULL,
	vegetable_id INT NOT NULL,
	FOREIGN KEY (vegetable_id) REFERENCES vegetables(id)
);