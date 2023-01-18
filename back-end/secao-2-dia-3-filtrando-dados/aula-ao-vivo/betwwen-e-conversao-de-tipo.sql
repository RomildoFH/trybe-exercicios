SELECT rental_date FROM sakila.rental
WHERE rental_date BETWEEN CAST('2005-05-26 00:00:00' AS DATETIME) AND CAST('2005-05-27 23:59:59' AS DATETIME);

-- Filtra e converte os dados para o formado desejado