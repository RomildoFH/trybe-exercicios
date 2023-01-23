SELECT * FROM film_actor;

SELECT actor_id, COUNT(*) AS films FROM film_actor
GROUP BY actor_id;
