-- INSERTION DES DONNÉES DU JEU D'ÉSSAI

TRUNCATE TABLE employees RESTART IDENTITY;

INSERT INTO employees
(emp_lastname, emp_firstname, emp_salary, emp_hiredate, emp_manager_id)
VALUES
('White', 'Walter', 99100, '2013-09-29', 1),
('Pinkman', 'Jesse', 90000, '2013-09-29', 1),
('Goodman', 'Saul', 80000, '2015-04-31', 3),
('Fring', 'gus', 120000, '2010-05-18', 5),
('Finger', 'Mike', 75000, '2011-07-16', 2),
('Salamanca', 'Lalo', 100000, '2009-12-04', 5),
('Hamlin', 'Howard', 50000, '2010-03-27', 4),
('Wexler', 'Kim', 50000, '2011-01-15', 4),
('White', 'Skyler', 55000, '2014-05-07', 2),
('Kenobi', 'Obi-Wan', 60000, '2015-01-17', 3),
('Solo', 'Han', 70000, '2017-06-19', 1),
('Vander Line', 'Dutch', 90000, '2010-05-05', 5),
('Morgan', 'Arthur', 85000, '2012-07-30', 2),
('Marston', 'John', 70000, '2016-01-21', 3),
('Escuella', 'Javier', 75000, '2017-12-29', 3),
('Bell', 'Micah', 80000, '2020-04-01', 4),
('Bateman', 'patrick', 95000, '2015-10-09', 5),
('Wayne', 'Bruce', 120000, '2009-06-14', 1);

-- MISE A JOUR DU MANAGER DE FOURNIER
UPDATE employees
