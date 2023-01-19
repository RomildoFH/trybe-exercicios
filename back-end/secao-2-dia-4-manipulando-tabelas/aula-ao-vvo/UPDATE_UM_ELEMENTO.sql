SELECT * FROM sakila.customer WHERE first_name = 'Terry';

UPDATE sakila.customer
SET email = 'c.terry@sakilacustumer.org'
/* WHERE first_name = 'Terry'; -- essa query está fraca pois existem mais de uma correspondência, deve-se priorizar usar uma coluna com chaves sem repetição */
WHERE customer_id = 253; -- Essa coluna não possui repetição logo é mais segura

/* SET SQL_SAFE_UPDATES = 0 -- Desabilita o safe mode do SQL permitindo atualizar os dados de forma não muito específica */

SET SQL_SAFE_UPDATES = 1 -- habilita o safe mode caso tenha sido desabilitado anteriormente.
