-- 1. 

SELECT id, name, variety, primary_color, life_time, fresh
FROM vegetables
ORDER BY name ASC;

-- 2.

SELECT vegetable_id, sale_unit_price
FROM sales
ORDER BY vegetable_id


-- 3.

SELECT id, name, variety, primary_color, life_time, fresh
FROM vegetables
WHERE primary_color = 'green';

-- 4.


