SELECT * FROM people:
SELECT * FROM residents;
SELECT * FROM jobs;

SELECT person_id, person_lastname, person_firstname
FROM people WHERE person_role_id = 5;

SELECT person_lastname, person_firstname, person_role_id
FROM people WHERE person_role_id <> 7;

SELECT * FROM people ORDER By person_role_id ASC, person_lastname DESC;

SELECT * FROM roles;
SELECT COUNT(*) FROM people WHERE person_role_id = 5;

SELECT * FROM roles, people

ORDER BY person_id ASC, role_id ASC;