-- a.

SELECT plane_ref, plane_autonomy, plane_speed
FROM planes
ORDER BY plane_speed DESC;
 
-- b.
 
SElECT plane_ref, plane_capacity, plane_autonomy, plane_maker
FROM planes
NATURAL JOIN manufacturers
--ORDER BY plane_maker; 
ORDER BY plane_autonomy DESC;

-- c.

SELECT plane_ref, plane_capacity, plane_autonomy, plane_speed, plane_date 
FROM planes
NATURAL JOIN manufacturers;
WHERE plane_maker LIKE '%b'

-- d.

SELECT plane_ref, plane_capacity, plane_autonomy, plane_speed, plane_date WHERE plane_speed > 1000, plane_capacity > 10
FROM planes;

-- e.

SELECT plane_maker, COUNT (DISTINCT plane_ref) AS number_of_planes 
FROM planes
NATURAL JOIN manufacturers
GROUP BY number_of_planes DESC;

-- f.


