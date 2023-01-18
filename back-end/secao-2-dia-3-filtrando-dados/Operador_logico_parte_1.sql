SELECT * FROM sakila.film;

SELECT * FROM sakila.film WHERE length > 50;

SELECT * FROM sakila.film WHERE length > 50 ORDER BY length ASC;

SELECT * FROM sakila.film
WHERE title <> 'ALIEN CENTER'
AND replacement_cost > 20;