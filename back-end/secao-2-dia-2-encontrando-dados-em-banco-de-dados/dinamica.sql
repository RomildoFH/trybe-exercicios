USE faculdade;

SELECT * FROM biblioteca;

SELECT nome FROM biblioteca;

SELECT COUNT(nome) AS quantidade FROM biblioteca;

SELECT * FROM biblioteca LIMIT 2 OFFSET 2;

SELECT * FROM biblioteca ORDER BY ano_lancamento DESC, nome ASC;

SELECT * FROM biblioteca ORDER BY quantidade DESC LIMIT 1;

SELECT * FROM biblioteca ORDER BY vendas DESC LIMIT 4;