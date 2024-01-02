
-- Insérer le modèle de roue
INSERT INTO EnsModeleRoue VALUES (ModeleRoue('Grosse Roue'));

-- Insérer le modèle de moteur
INSERT INTO EnsModeleMoteur VALUES (ModeleMoteur('Super sans plomb'));

-- Insérer le modèle de voiture
INSERT INTO EnsModeleVoiture VALUES (ModeleVoiture('Toyota'));

-- Insérer la roue
INSERT INTO Roue VALUES (56, (SELECT REF(m) FROM EnsModeleRoue m WHERE m.nom = 'Grosse Roue'), 'Michelin');

-- Insérer le moteur
INSERT INTO Moteur VALUES (589, (SELECT REF(m) FROM EnsModeleMoteur m WHERE m.nom = 'Super sans plomb'), 'Toyota');

-- Insérer la voiture avec une roue et un moteur
INSERT INTO EnsVoiture VALUES (115643, (SELECT REF(m) FROM EnsModeleVoiture m WHERE m.nom = 'Toyota'),
    LesRoues(Roue(56, (SELECT REF(m) FROM EnsModeleRoue m WHERE m.nom = 'Grosse Roue'), 'Michelin')), (SELECT REF(m) FROM Moteur m WHERE m.numero = 589));

-- Afficher les voitures dont le modèle est Super sans plomb et le modèle de voiture est Peugeot
SELECT v.numero
FROM EnsVoiture v
WHERE v.mot.modele.nom = 'Super sans plomb'
  AND v.modele.nom = 'Peugeot';



-- Afficher les couples de voitures qui possèdent le même moteur
SELECT v1.numero AS Voiture1, v2.numero AS Voiture2
FROM EnsVoiture v1, EnsVoiture v2
WHERE v1.mot = v2.mot
  AND v1.numero < v2.numero;

-- afficher les numéros des voitures qui possèdent la roue numéro 554
SELECT v.numero
FROM EnsVoiture v, TABLE(v.roues) r
WHERE r.numero = 554;

-- afficher le nombre de voitures par modèle de moteur 
SELECT m.modele.nom AS ModeleMoteur, COUNT(v.numero) AS NombreDeVoitures
FROM EnsVoiture v, Moteur m
WHERE v.mot = m
GROUP BY m.modele.nom;
