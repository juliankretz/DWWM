<?php

/**  
* DATA Source Name (connectionString)
* - host = adresse du serveur de base de données
* - port = port (si ce n'est pas le port par défaut)
* - dname = nom de la base de données
* - charset = jeu de caractères
*/

$dsn = 'mysql:host=localhost;port=3306;dbname=db_users;charset=utf8mb4';

$connexion = new PDO($dsn, 'jkretz', '1234');


