CREATE DATABASE papo_do_subsolo;
USE papo_do_subsolo;

CREATE TABLE usuario(
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
nickname VARCHAR(20) NOT NULL,
tag CHAR(3) NOT NULL DEFAULT 'BR1',
email VARCHAR(50) NOT NULL UNIQUE,
senha VARCHAR(20) NOT NULL,
dt_cadastro DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE comentario(
id_comentario INT,
comentario VARCHAR(300) NOT NULL,
dt_postagem DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
pk_usuario INT,
CONSTRAINT fkComentarioUsuario FOREIGN KEY comentario(pk_usuario) REFERENCES usuario(id_usuario),
CONSTRAINT pkComentarioUsuario PRIMARY KEY (id_comentario, pk_usuario)
);

CREATE TABLE personagem_favorito(
id_personagem INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(30) NOT NULL UNIQUE,
descricao VARCHAR(300) NOT NULL UNIQUE
);

CREATE TABLE alma(
id_alma INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(20) NOT NULL UNIQUE,
descricao VARCHAR(300) NOT NULL
);

CREATE TABLE resultado_quiz(
id_resultado INT,
pk_usuario INT,
fk_personagem INT NOT NULL,
fk_alma INT NOT NULL,
CONSTRAINT fkResultadoAlma FOREIGN KEY resultado_quiz(fk_alma) REFERENCES alma(id_alma),
CONSTRAINT fkResultadoPersonagem FOREIGN KEY resultado_quiz(fk_personagem) REFERENCES personagem_favorito(id_personagem),
CONSTRAINT fkResultadoUsuario FOREIGN KEY resultado_quiz(pk_usuario) REFERENCES usuario(id_usuario),
CONSTRAINT pkResultadoUsuario PRIMARY KEY (id_resultado, pk_usuario)
);