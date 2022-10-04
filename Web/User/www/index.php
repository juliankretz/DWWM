<?php

/**  
* DATA Source Name (connectionString)
* - host = adresse du serveur de base de données
* - port = port (si ce n'est pas le port par défaut)
* - dname = nom de la base de données
* - charset = jeu de caractères
*/

/* $dsn = 'mysql:host=localhost;port=3306;dbname=db_users;charset=utf8mb4';

$connexion = new PDO($dsn, 'jkretz', '1234'); */

echo '<pre>' .var_export($_GET, true). '</pre>';

// si le paramètre 'page' dans l'url n'est pas vide

$page = $_GET['page'] ?? 'home';

switch($page)
{
    case 'home';
        //charger ici le fichier home.php
        require '../view/home.php';
    break;
    case 'profile';
        //charger ici le fichier profile.php
        require '../controller/ProfileController.php';
        $controller = new ProfileConstroller();
        $controller->index();
    break;
    case 'groups';
        require '../controller/GroupController.php';
        $controller = new GroupController();
        $controller->index();
    break;
    default:
        echo 'Erreur 404';
    break;
}

