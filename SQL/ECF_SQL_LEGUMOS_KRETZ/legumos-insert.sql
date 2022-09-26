TRUNCATE TABLE vegetables CASCADE;
TRUNCATE TABLE sales CASCADE;

INSERT INTO vegetables
(id, name, variety, primary_color, life_time, fresh)
VALUES
(1, 'apple', 'golden', 'green', 90, 0),
(2, 'banana', 'cavendish', 'yellow', 10, 0),
(3, 'blueberries', 'bluecrop', 'green', 8, 0),
(4, 'cabbage', 'broccoli', 'green', 60, 0),
(5, 'carrot', 'de Colmar', 'orange', 60, 0),
(6, 'cherry', 'mareau', 'darkred', 20, 0),
(7, 'coconut', 'palmyre', 'brown', 30, 0),
(8, 'grape', 'aladin', 'green', 10, 0),
(9, 'kiwi', 'hayward', 'green', 40, 0),
(10, 'lemon', 'eureka', 'green', 30, 0),
(11, 'onion', 'Stuttgart', 'white', 90, 0);

INSERT INTO sales
(sale_id, sale_date, vegetable_id, sale_weight, sale_unit_price, sale_active)
VALUES
(1, '14/01/2022', 3, 3, 2.99, 1),
(2, '05/02/2022', 1, 5, 2.5, 1),
(3, '16/02/2022', 6, 4, 1.99, 0),
(4, '09/03/2022', 4, 3, 1.49, 1),
(5, '01/04/2022', 9, 3, 2.45, 0),
(6, '17/05/2022', 2, 3, 3.99, 1),
(7, '08/06/2022', 10, 2, 1.25, 0),
(8, '14/07/2022', 7, 8, 3.95, 0),
(9, '06/08/2022', 5, 3, 1.59, 0),
(10, '16/09/2022', 8, 4, 1.95, 1);