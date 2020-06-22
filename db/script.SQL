/*
Created: 21/06/2020
Modified: 22/06/2020
Model: mg_revendedora
Database: SQLite 3.7
*/


-- Create tables section -------------------------------------------------

-- Table Gestores

CREATE TABLE Gestores
(
  Id INTEGER NOT NULL
        CONSTRAINT PK_Gestores PRIMARY KEY AUTOINCREMENT,
  Nome TEXT NOT NULL,
  Login TEXT NOT NULL,
  Email TEXT NOT NULL,
  Senha TEXT NOT NULL,
  CONSTRAINT Id UNIQUE (Id)
);

-- Table Carros

CREATE TABLE Carros
(
  Id INTEGER NOT NULL
        CONSTRAINT PK_Carros PRIMARY KEY AUTOINCREMENT,
  Nome TEXT NOT NULL,
  Modelo TEXT NOT NULL,
  Cor TEXT NOT NULL,
  TipoAbastecimento TEXT NOT NULL,
  Ano int NOT NULL,
  FinalPlaca TEXT NOT NULL,
  KilometragemAtual int NOT NULL,
  Descricao TEXT NOT NULL,
  DadosAdicionais TEXT NOT NULL,
  Imagem blob NOT NULL,
  IdGestor INTEGER NOT NULL,
  CONSTRAINT Id UNIQUE (Id),
  CONSTRAINT FK_Gestor_Carro FOREIGN KEY (IdGestor) REFERENCES Gestores (Id)
);

CREATE INDEX IX_Gestor_Carro ON Carros (IdGestor);

