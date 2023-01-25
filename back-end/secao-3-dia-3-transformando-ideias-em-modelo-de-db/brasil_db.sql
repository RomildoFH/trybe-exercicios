  -- Apagar a versão antiga da tabela
  DROP TABLE cidades;

  -- Cria uma tabela
  CREATE TABLE cidades(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  cidade VARCHAR(100) NOT NULL,
  estado VARCHAR(10) NOT NULL,
  populacao INTEGER
  );

  -- Insere os dados na tabela
  INSERT INTO cidades(cidade, estado, populacao)
  VALUES('Rio Claro','SP',185421),
  ('Rio Claro','RJ',17216);