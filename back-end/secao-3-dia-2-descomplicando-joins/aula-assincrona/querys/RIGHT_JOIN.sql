SELECT * FROM sakila.actor;
SELECT * FROM sakila.customer;

SELECT c.customer_id, c.first_name, a.actor_id
FROM sakila.customer AS c
RIGHT JOIN sakila.actor AS a
ON c.last_name = a.last_name;