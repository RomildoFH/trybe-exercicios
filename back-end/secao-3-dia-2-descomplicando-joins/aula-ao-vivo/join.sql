USE sakila;

SELECT * FROM address WHERE city_id=449;

SELECT * FROM city WHERE city_id = 449;

SELECT A.address, A.district, C.city 
FROM address AS A
INNER JOIN city AS C
ON A.city_id = C.city_id;

SELECT * FROM address AS A INNER JOIN city AS C
ON A.city_id = C.city_id
WHERE A.city_id = 449;