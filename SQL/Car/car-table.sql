DROP TABLE IF EXISTS cars CASCADE;
DROP TABLE IF EXISTS owners; 
DROP TABLE IF EXISTS brands;

CREATE TABLE owners
(
	owner_id INT,
	owner_lastname VARCHAR(50) NOT NULL, 
	owner_firstname VARCHAR(50) NOT NULL,
	PRIMARY KEY(owner_id)
);

CREATE TABLE brands
(
	brand_id SERIAL,
	brand_name VARCHAR(50) NOT NULL,
	brand_slogan VARCHAR(255) NULL,
	PRIMARY KEY(brand_id)
);

CREATE TABLE cars 
(
	car_id SERIAL,
	car_name VARCHAR(100) NOT NULL,
	brand_id INT NOT NULL,
	car_registration CHAR(9) NOT NULL,
	car_owner_id INT,
	PRIMARY KEY(car_id),
	FOREIGN KEY(brand_id) REFERENCES brands(brand_id),
	FOREIGN KEY(car_owner_id) REFERENCES owners(owner_id)
); 