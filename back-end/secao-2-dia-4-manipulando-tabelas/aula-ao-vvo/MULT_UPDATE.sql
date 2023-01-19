SELECT * FROM sakila.film WHERE film_id IN (609, 612, 622, 626, 650, 653);

UPDATE sakila.film
SET rental_rate = rental_rate * 0.7
WHERE film_id IN (609, 612, 622, 626, 650, 653);