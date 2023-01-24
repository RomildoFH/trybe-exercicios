SELECT * FROM sakila.city;

SELECT * FROM sakila.country;

SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;