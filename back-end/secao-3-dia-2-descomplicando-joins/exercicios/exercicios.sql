USE pixar;

SELECT * FROM box_office;

SELECT * FROM movies;

-- Exercício 1 Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT title, domestic_sales, international_sales
FROM movies AS M
INNER JOIN box_office AS B
ON M.id = B.movie_id;

-- Exercício 2 Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).

SELECT title, domestic_sales + international_sales AS total_sales
FROM movies AS M
INNER JOIN box_office AS B
ON M.id = B.movie_id
WHERE B.international_sales > B.domestic_sales;

-- Exercício 3 Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT title, rating
FROM movies AS m
INNER JOIN box_office AS b
ON m.id - b.movie_id
ORDER BY rating DESC;

-- Exercício 4 Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT t.*, m.title, m.director, m.year, m.length_minutes FROM theater AS t
LEFT JOIN movies AS m ON t.id = m.theater_id
ORDER BY t.name;

-- Exercício 5 Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética
SELECT
  m.*,
  t.name,
  t.location
FROM movies AS m
RIGHT JOIN theater AS t ON t.id = m.theater_id
ORDER BY t.name ASC;

-- 🚀 Exercício 6: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT
  m.*,
  b.rating
FROM movies AS m
INNER JOIN box_office AS b
ON m.id = b.movie_id
WHERE m.theater_id IS NOT NULL
  AND b.rating > 8
;
