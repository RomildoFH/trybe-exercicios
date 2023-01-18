USE sakila;
SELECT * FROM film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';