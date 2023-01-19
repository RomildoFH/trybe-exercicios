SELECT * FROM sakila.actor;

SELECT * FROM sakila.actor ORDER BY actor_id DESC LIMIT 5;

SELECT * FROM sakila.customer;

INSERT INTO sakila.actor(first_name, last_name)
SELECT first_name, last_name FROM sakila.customer LIMIT 5; /* Inserindo dados de customer na tabela actor */