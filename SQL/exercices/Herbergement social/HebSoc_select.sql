SELECT * FROM roles;
SELECT * FROM people;
SELECT * FROM residents,
SELECT * FROM medicals_needs;
SELECT * FROM activities;
SELECT * FROM events;

-- Sélectionner les activités dont le nombre de places disponibles est inférieur au quart du maximum.

SELECT activity_label
FROM activities
NATURAL JOIN events
NATURAL JOIN events_registration 
GROUP BY activity_id, event_id
HAVING (event_cap_max - COUNT(events_registration.*)) < (event_cap_max / 4) 