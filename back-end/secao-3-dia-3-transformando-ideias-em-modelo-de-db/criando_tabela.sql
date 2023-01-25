DROP DATABASE IF EXISTS Biblioteca;
CREATE DATABASE IF NOT EXISTS Biblioteca;

USE Biblioteca;

CREATE TABLE Autor(
	autor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Categoria(
	categoria_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE Cliente(
	cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(200) NOT NULL
);

CREATE TABLE Livro(
	livro_id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(200) NOT NULL,
    autor_id INT NOT NULL,
    categoria_id INT NOT NULL,
    FOREIGN KEY (autor_id) REFERENCES Autor (autor_id),
    FOREIGN KEY (categoria_id) REFERENCES Categoria (categoria_id)
);

CREATE TABLE Historico(
	livro_id INT NOT NULL,
    cliente_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY (livro_id, cliente_id),
    FOREIGN KEY (livro_id) REFERENCES Livro (livro_id),
    FOREIGN KEY (cliente_id) REFERENCES Cliente (cliente_id),
    data_aluguel DATE NOT NULL,
    data_retorno DATE
);