CREATE DATABASE biblioteca;
USE biblioteca;

-- Tabla para los tipos de usuarios
CREATE TABLE TipoUsuario (
    IdTipoUsuario INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Descripcion VARCHAR(50) NOT NULL 
);

CREATE TABLE Usuario (
    IdUsuario INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(255) NOT NULL,
    Correo VARCHAR(255) NOT NULL UNIQUE,
    FechaNac DATE,
    Direccion VARCHAR(255),
    Telefono VARCHAR(20),
    Password VARCHAR(255) NOT NULL,
    IdTipoUsuario INT,
    FOREIGN KEY (IdTipoUsuario) REFERENCES TipoUsuario(IdTipoUsuario)
);

CREATE TABLE Book (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(50) NOT NULL,
    Editorial VARCHAR(20),
    FechaRegistro DATETIME NOT NULL,
    Categoria VARCHAR(50),
    Autor VARCHAR(50),
    Piezas INT NOT NULL
);

CREATE TABLE Prestamo (
    IdPrestamo INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FechaPres DATETIME NOT NULL,
    FechaDev DATETIME NOT NULL,
    IdUsuario INT,
    id INT,
    FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario),
    FOREIGN KEY (id) REFERENCES Book(id)
);

CREATE TABLE Multas (
    IdMulta INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FechaPag DATETIME,
    Monto DECIMAL(10, 2) NOT NULL,
    Estatus VARCHAR(50) NOT NULL,
    IdPrestamo INT,
    FOREIGN KEY (IdPrestamo) REFERENCES Prestamo(IdPrestamo)
);
