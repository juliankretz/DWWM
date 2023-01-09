DROP TABLE IF EXISTS manufacturers;
DROP TABLE IF EXISTS planes; 

CREATE TABLE manufacturers
(
	plane_maker_id SERIAL,
	plane_maker VARCHAR(50) NOT NULL,
	PRIMARY KEY(plane_maker_id)
);

CREATE TABLE planes
(
	plane_ref CHAR(5),
	plane_capacity INT,
	plane_autonomy INT,
	plane_speed INT,
	plane_date DATE,
	plane_maker_id INT,
	PRIMARY KEY(plane_ref),
	FOREIGN KEY(plane_maker_id) REFERENCES manufacturers(plane_maker_id)
);