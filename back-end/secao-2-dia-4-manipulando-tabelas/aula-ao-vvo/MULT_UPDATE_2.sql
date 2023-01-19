SELECT * FROM sakila.film WHERE film_id IN (609, 612, 622, 626, 650, 653);

SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.film
SET rental_rate = (
	CASE WHEN rating = 'PG-13' THEN rental_rate * 0.7
		 WHEN rating = 'PG' THEN rental_rate * 1.1
	END
)
WHERE rating IN ('PG', 'PG-13'); -- Nesse caso é necessário desabilitar o safe mode porque haverá conflitos devido repetições

SELECT * FROM sakila.film
ORDER BY rental_rate ASC
LIMIT 15;

UPDATE sakila.film
SET rental_duration = rental_duration + 1 
ORDER BY rental_rate ASC
LIMIT 15; -- Essa query está aumentando o dia de aluguel em + 1 para os 15 primeiros filmes

