USE Scientists;

SELECT 'This is SQL Exercise, Practice and Solution';

SELECT 1, 2 ,3;

SELECT 10 + 15;

SELECT (10 * 3) + 5;

SELECT * FROM Scientists;

SELECT Name AS 'Nome do Projeto', Hours AS 'Horas de Trabalho' FROM Projects;

SELECT Name FROM Scientists ORDER BY Name ASC;

SELECT Name AS 'Nome do Projeto' FROM Projects ORDER BY Name DESC;

SELECT CONCAT('O Projeto ', Name, ' Precisou de ', Hours, ' horas para ser concluído') AS Projeto FROM Projects;

SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 3;

SELECT DISTINCT Project FROM AssignedTo;

SELECT Name, Hours FROM Projects ORDER BY Hours DESC LIMIT 1;

SELECT Name, Hours FROM Projects ORDER BY Hours ASC LIMIT 1;

SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists.') AS resultado FROM Scientists;