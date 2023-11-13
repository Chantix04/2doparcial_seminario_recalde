CREATE DATABASE IF NOT EXISTS swarmdb;
USE swarmdb;
CREATE TABLE IF NOT EXISTS perfiles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nomUsuario VARCHAR(200),
    perfil VARCHAR(200),
    activo BOOLEAN
);

INSERT INTO perfiles (nomUsuario, perfil, activo) VALUES
    ('Chantix', 'Repositor', 1);



