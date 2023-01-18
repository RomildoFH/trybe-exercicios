USE sakila;

SELECT CONCAT(first_name, last_name) FROM actor;

SELECT CONCAT(first_name, ' ', last_name) FROM actor;

SELECT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM actor;

SELECT DISTINCT CONCAT(first_name, ' ', last_name) AS 'Nome Completo' FROM actor;