SELECT COUNT(address2) FROM sakila.address;

SELECT COUNT(DISTINCT district), COUNT(DISTINCT city_id) FROM sakila.address;

SELECT COUNT(*) FROM sakila.address WHERE district = 'California';

SELECT district, COUNT(*) AS quantidade FROM sakila.address WHERE district = 'California';

SELECT rating, COUNT(*) AS quantidade FROM sakila.film GROUP BY rating;

SELECT * FROM sakila.actor ORDER BY first_name ASC, last_name DESC ;
