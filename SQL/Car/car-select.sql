SELECT * FROM cars;
SELECT * FROM owners;
SELECT * FROM brands;

-- 1) Sélectionner le nom et le numéro d'immatriculation de toutes les voitures
-- Trier par immatriculation (ordre croissant)

SELECT car_name, car_registration 
FROM cars
ORDER BY car_registration ASC; 

-- 2) Sélectionner toutes les informations de toutes les voitures, incluant le nom de la marque ainsi que le nom et prénom du propriétaire
-- Trier par nom de marque puis par nom de propriétaire

SELECT car_id, car_name, brand_id, car_registration, brand_name, owner_lastname, owner_firstname
FROM 
ORDER BY brand_name; 

-- 3) Sélectionner le nom de toutes les marques incluant le nombre de voitures de chaque marque.

SELECT brand_name AS brand, COUNT (car_name) AS number_of_car
FROM brands
INNER JOIN cars ON brands.brand_id = cars.brand_id
GROUP BY brand_name;

-- 4) Sélectionner le nom de toutes les marques incluant le nombre de propriétaire de chaque marque.

SELECT brand_name AS brand, COUNT (DISTINCT owner_lastname) AS number_of_owner
FROM brands
NATURAL JOIN cars 
INNER JOIN owners ON cars.car_owner_id = owners.owner_id
GROUP BY brand_id;

-- 5) Sélectionner les prénoms des propriétaires dont le prénom commence par la lettre A.

SELECT owner_firstname
FROM owners
WHERE owner_firstname LIKE 'A%';

-- 6) Sélectionner le nom et prénom des propriétaires dont le prénom contient plus de 5 lettres.

SELECT owner_lastname, owner_firstname
FROM owners 
WHERE owner_firstname 

-- 7) Sélectionner les noms et prénoms des propriétaires possédant plus d’une voiture avec le nombre de voitures possédées par propriétaire. 
-- Trier la liste par nombre de voitures possédées. Les propriétaires possédant le plus de voitures apparaissent en 1er.

SELECT owner_lastname, owner_firstname, COUNT (car_owner_id) AS number_of_car
FROM owners
NATURAL JOIN cars 
INNER JOIN 
GROUP BY number_of_car;

-- 8) Sélectionner les noms et prénoms des propriétaires possédant plus d’une voiture de même marque. 
-- Pour chaque marque de voiture trouvée, afficher le nom de la marque et le nombre de voiture possédées pour cette marque.

SELECT

