-- Création des types d'objets
CREATE TYPE PersonneType AS OBJECT (
    PersonneId INT,
    Nom VARCHAR(50),
    Prenom VARCHAR(50),
    Adresse VARCHAR(255),
    NumTel VARCHAR(15)
);

CREATE TYPE FournisseurType AS OBJECT (
    RaisonSociale VARCHAR(255),
    Personne REF PersonneType
);

CREATE TYPE ClientType AS OBJECT (
    NumCarteFidelite VARCHAR(20),
    Personne REF PersonneType
);

CREATE TYPE FactureVType AS OBJECT (
    Numero INT,
    Date DATE,
    Client REF ClientType
);

CREATE TYPE FactureAType AS OBJECT (
    Numero INT,
    Date DATE,
    Fournisseur REF FournisseurType
);

CREATE TYPE ProduitType AS OBJECT (
    ProduitID INT,
    Designation VARCHAR(255),
    Stock INT
);

CREATE TYPE LigneFVType AS OBJECT (
    Quantite INT,
    PrixV DECIMAL(10, 2),
    Produit REF ProduitType
);

CREATE TYPE LigneFAType AS OBJECT (
    Quantite INT,
    PrixA DECIMAL(10, 2),
    Produit REF ProduitType
);

-- Création des tables d'objets
CREATE TABLE Personne OF PersonneType;
CREATE TABLE Fournisseur OF FournisseurType;
CREATE TABLE Client OF ClientType;
CREATE TABLE FactureV OF FactureVType;
CREATE TABLE FactureA OF FactureAType;
CREATE TABLE Produit OF ProduitType;
CREATE TABLE LigneFV OF LigneFVType;
CREATE TABLE LigneFA OF LigneFAType;

-- Insérer des données dans la table Personne
INSERT INTO Personne VALUES (1, 'Dupont', 'Jean', 'Adresse1', 'NumTel1');
INSERT INTO Personne VALUES (2, 'Martin', 'Alice', 'Adresse2', 'NumTel2');

-- Insérer des données dans la table Fournisseur
INSERT INTO Fournisseur VALUES ('SAS', (SELECT REF(p) FROM Personne p WHERE PersonneId = 1));
INSERT INTO Fournisseur VALUES ('Fournisseur2', (SELECT REF(p) FROM Personne p WHERE PersonneId = 2));

-- Insérer des données dans la table Client
INSERT INTO Client VALUES ('Carte1', (SELECT REF(p) FROM Personne p WHERE PersonneId = 1));
INSERT INTO Client VALUES ('Carte2', (SELECT REF(p) FROM Personne p WHERE PersonneId = 2));

-- Insérer des données dans la table FactureV
INSERT INTO FactureV VALUES (101, TO_DATE('2023-09-01', 'YYYY-MM-DD'), (SELECT REF(c) FROM Client c WHERE NumCarteFidelite = 'Carte1'));
INSERT INTO FactureV VALUES (102, TO_DATE('2023-09-02', 'YYYY-MM-DD'), (SELECT REF(c) FROM Client c WHERE NumCarteFidelite = 'Carte2'));

-- Insérer des données dans la table FactureA
INSERT INTO FactureA VALUES (201, TO_DATE('2023-09-03', 'YYYY-MM-DD'), (SELECT REF(f) FROM Fournisseur f WHERE RaisonSociale = 'SAS'));
INSERT INTO FactureA VALUES (202, TO_DATE('2023-09-04', 'YYYY-MM-DD'), (SELECT REF(f) FROM Fournisseur f WHERE RaisonSociale = 'Fournisseur2'));

-- Insérer des données dans la table Produit
INSERT INTO Produit VALUES (301, 'Produit1', 10);
INSERT INTO Produit VALUES (302, 'Produit2', 20);

-- Insérer des données dans la table LigneFV
INSERT INTO LigneFV VALUES (101, (SELECT REF(p) FROM Produit p WHERE ProduitID = 301), 5, 50.0);
INSERT INTO LigneFV VALUES (102, (SELECT REF(p) FROM Produit p WHERE ProduitID = 302), 3, 30.0);

-- Insérer des données dans la table LigneFA
INSERT INTO LigneFA VALUES (201, (SELECT REF(p) FROM Produit p WHERE ProduitID = 301), 2, 40.0);
INSERT INTO LigneFA VALUES (202, (SELECT REF(p) FROM Produit p WHERE ProduitID = 302), 4, 60.0);

SELECT fa.Numero, fa.Date, f.RaisonSociale
FROM FactureA fa
JOIN Fournisseur f ON fa.Fournisseur.Personne = f.Personne.PersonneId
WHERE f.RaisonSociale = 'SAS';

SELECT fv.Numero, fv.Date, c.Personne.Nom AS Client_Nom, c.Personne.Prenom AS Client_Prenom
FROM FactureV fv
JOIN Client c ON fv.Client.Personne = c.Personne.PersonneId;

SELECT p.ProduitID, p.Designation, p.Stock,
       COALESCE(SUM(fv.Quantite), 0) AS TotalQuantiteV,
       COALESCE(SUM(fv.PrixV), 0.0) AS TotalPrixV,
       COALESCE(SUM(fa.Quantite), 0) AS TotalQuantiteA,
       COALESCE(SUM(fa.PrixA), 0.0) AS TotalPrixA
FROM Produit p
LEFT JOIN LigneFV fv ON p = fv.Produit.ProduitID
LEFT JOIN LigneFA fa ON p = fa.Produit.ProduitID
GROUP BY p.ProduitID, p.Designation, p.Stock;

SELECT COUNT(*) AS NombreDeProduits
FROM Produit;

