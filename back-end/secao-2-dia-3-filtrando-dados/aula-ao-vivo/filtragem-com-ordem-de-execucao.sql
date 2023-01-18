SELECT title, rental_duration FROM sakila.film
WHERE rental_duration = 6 AND rating = 'R' OR rating = 'PG-13'; -- Ele exibira resultados diferentes de 6 por conta da precendência

SELECT title, rental_duration FROM sakila.film
WHERE rental_duration = 6 AND (rating = 'R' OR rating = 'PG-13');