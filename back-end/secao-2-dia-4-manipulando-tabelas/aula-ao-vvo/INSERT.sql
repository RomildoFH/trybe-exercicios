DESCRIBE sakila.actor;

SELECT * FROM sakila.actor;

INSERT INTO sakila.actor(first_name, last_name) VALUES
('Romildo', 'Silva'),
('TOM', 'HANKS'),
('Will','Smith');

SELECT * FROM sakila.actor ORDER BY actor_id DESC LIMIT 5;