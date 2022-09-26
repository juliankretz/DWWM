TRUNCATE TABLE cars RESTART IDENTITY CASCADE;
TRUNCATE TABLE owners RESTART IDENTITY CASCADE;
TRUNCATE TABLE brands RESTART IDENTITY CASCADE;

INSERT INTO owners
(owner_id, owner_lastname, owner_firstname)
VALUES
(1, 'Petit', 'Annie'), 
(5, 'Jones', 'Steeven'),
(2, 'Marsfall', 'Bénédicte'),
(4, 'Bouchra', 'Amine'),
(3, 'Doe', 'John');

INSERT INTO brands
(brand_id, brand_name, brand_slogan)
VALUES
(1, 'Chevrolet', ''),
(2, 'Audi', ''),
(3, 'Toyota', ''),
(4, 'Peugeot', ''),
(5, 'AMC', '');

INSERT INTO cars
(car_id, car_name, brand_id, car_registration, car_owner_id)
VALUES 
(12, 'Chevelle Concours', 1, 'AA-123-AA', 1),
(16, 'A6 Break', 2, 'BB-274-BB', 5),
(21, 'Corolla', 3, 'CA-789-BA', 2),
(19, 'Monte Carlo', 1, 'CC-546-FV', 4),
(27, '504', 4, 'CG-274-ZG', 4),
(30, 'Q8', 2, 'ER-355-GX', 3),
(28, '100 LS', 2, 'FV-313-FT', 5),
(23, 'Hornet', 5, 'DE-228-KS', 5),
(26, '3008', 4, 'CF-614-PM', 5); 