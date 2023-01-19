USE pixar;

/* 1. Exercício 1: Insira os filmes da Pixar abaixo na tabela movies:

Monstros SA, de Pete Docter, lançado em 2001, com 92 minutos de duração.
Procurando Nemo, de John Lasseter, lançado em 2003, com 107 minutos de duração.
Os Incríveis, de Brad Bird, lançado em 2004, com 116 minutos de duração.
WALL-E, de Pete Docter, lançada em 2008, com 104 minutos de duração.
*/

INSERT INTO movies(title, director, year, length_minutes)
  VALUES ('Monstros SA', 'Pete Docter', 2001, 92),
         ('Procurando Nemo', 'Jon Lasseter', 2003, 107),
         ('Os Incríveis', 'Brad Bird', 2004, 116),
         ('WALL-E', 'Pete Docter', 2008, 104);
         
SELECT * FROM movies;

/* 2. Exercício 2: Procurando Nemo foi aclamado pela crítica! Foi classificado em 6.8, fez 450 milhões no mercado interno e 370 milhões no mercado internacional. Adicione as informações à tabela box_office. */

SELECT * FROM box_office;

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUE (9, 6.8, 450000000, 370000000);
  
/* Exercício 3: O diretor do filme “Procurando Nemo” está incorreto, na verdade ele foi dirigido por “Andrew Stanton”. Corrija esse dado utilizando o UPDATE. */

SET SQL_SAFE_UPDATES = 0;

UPDATE movies
SET director = 'Andrew Stanton'
WHERE title = 'Procurando Nemo';

SELECT * FROM movies;

/* Exercício 4: O título do filme “Ratatouille” está escrito de forma incorreta na tabela movies, além disso, o filme foi lançado em 2007 e não em 2010. Corrija esses dados utilizando o UPDATE. */

UPDATE movies
SET title = 'Ratatouille', year = 2007
WHERE title = 'ratatui';

SELECT * FROM movies;

/*
Exercício 5: Insira as novas classificações abaixo na tabela box_office, lembre-se que a coluna movie_id é uma foreign key referente a coluna id da tabela movies:

Monsters SA, classificado em 8.5, lucrou 300 milhões no mercado interno e 250 milhões no mercado internacional.
Os Incríveis, classificado em 7.4, lucrou 460 milhões no mercado interno e 510 milhões no mercado internacional.
WALL-E, classificado em 9.9, lucrou 290 milhões no mercado interno e 280 milhões no mercado internacional.
*/

INSERT INTO box_office(movie_id, rating, domestic_sales, international_sales)
  VALUES (8, 8.5, 300000000, 250000000),
         (10, 7.4, 460000000, 510000000),
         (11, 9.9, 290000000, 280000000);
SELECT * FROM box_office;

/*
Exercício 6: Exclua da tabela movies o filme “WALL-E”. P.S.: Lembrando que existe uma relação de Primary key-Foreign Key, portanto devemos excluir primeiro a referência da tabela box_office, para depois excluir da tabela movies.
*/

DELETE FROM box_office
WHERE movie_id = 11; -- este é o id do filme WALL-E
SELECT * FROM box_office;

DELETE FROM movies
WHERE title = 'WALL-E';
SELECT * FROM movies;

/*
Exercício 7: Exclua da tabela movies todos os filmes dirigidos por “Andrew Stanton”.
*/
SELECT id FROM movies
WHERE director = 'Andrew Stanton';
-- primeiro é utilizada essa query para selecionar os ids dos filmes a serem excluídos (2 e 9)

DELETE FROM box_office
WHERE movie_id IN (2, 9);
SELECT * FROM box_office;

DELETE FROM movies
WHERE director = 'Andrew Stanton';
SELECT * FROM movies;

SELECT id FROM movies
WHERE director = 'Andrew Stanton';
