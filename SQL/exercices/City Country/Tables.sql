
CREATE TABLE countries
(
	country_code CHAR(2) PRIMARY KEY,
	country_name VARCHAR(100) NOT NULL
);

CREATE TABLE cities
(
	city_id INT, 
	city_name VARCHAR(100) NOT NULL,
	country_code CHAR(2) NOT NULL,
	PRIMARY KEY(city_id), 
	FOREIGN KEY(country_code)
);

ALTER TABlE cities
	ADD CONSTRAINT fkey_country_code FOREIGN KEY (country_code) REFERENCES countries(country_code);
	