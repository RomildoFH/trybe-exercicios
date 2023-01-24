USE sakila;
SELECT A.address, A.district, C.city, CO.country
  FROM address AS A RIGHT JOIN city AS C ON A.city_id = C.city_id
  INNER JOIN country AS CO ON CO.country_id = C.country_id;