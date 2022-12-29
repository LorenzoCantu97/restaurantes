# restaurant-managment
    Para que la herramienta funcione correctamente se necesita una tabla de usuarios y otra para los restaurantes.
    Usando los siguientes dos comandos, se pueden crear facilmente las tablas donde se guardará la información.

    CREATE TABLE restaurantes(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(50) NOT NULL,
        direccion VARCHAR(100) NOT NULL,
        telefono VARCHAR(15) NOT NULL,
        usuario VARCHAR(50) NOT NULL
    );

    CREATE TABLE usuarios(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        nombre VARCHAR(45) NOT NULL,
        correo VARCHAR(60) NOT NULL,
        pwd VARCHAR(45) NOT NUL,
    );