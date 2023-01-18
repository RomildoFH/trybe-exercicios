USE sakila;
SELECT * FROM film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';