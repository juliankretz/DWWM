-- 

DROP TABLE IF EXISTS employees;

-- CREATION DES TABLES

CREATE TABLE employees
(
	emp_id SERIAL PRIMARY KEY,
	emp_lastname VARCHAR(50) NOT NULL,
	emp_firstname VARCHAR(50) NOT NULL,
	emp_salary INT NOT NULL,
	emp_hiredate DATE NOT NULL	
);

-- AJOUT DES CONTRAINTES

ALTER TABLE employees
	ADD PRIMARY KEY (emp_id),
	ADD COLUMN emp_manager_id INT NULL, 
	ADD CONSTRAINT fk_employees_manager FOREIGN KEY (map_manager_id) REFERENCES employees(map_id);