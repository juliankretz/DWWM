<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Restaurants - Créer</title>
</head>
<body>

<?php

    require "./models/mytable.php";
    if (!empty($_POST["btnConf"]))
    {
        $myObject = new MyTable(Connection::getInstance(), "restaurants");
        $nbLigne = $myObject->createRow($_POST["nomResto"], $_POST["txtAdresse"], $_POST["prix"], $_POST["commentaire"], $_POST["note"], $_POST["dateVisite"]);
        if ($nbLigne == 1)
        {
            echo "Ligne insérée";
        }
    }



    $chaine = "creer.php";
?>

    <h3>Remplissez la ligne à ajouter</h3>
    <form method="POST" action="<?=$chaine ?>" enctype="multipart/form-data">
        <fieldset>
            <legend>Critique restaurant</legend>

            <label for="nomResto">Nom du restaurant</label>
            <input type="text" id="nomResto" name="nomResto" maxlength="100" value=""/> <br>

            <label for="txtAdresse">Adresse du restaurant</label>
            <input type="text" id="txtAdresse" name="txtAdresse" maxlength="500" size="60" value=""/> <br>

            <label for="prix">Prix moyen d'un repas</label>
            <input type="number" id="prix" name="prix" step="0.01" min="0" max="500" value=""/> <br>

            <label for="commentaire">Commentaire sur le restaurant</label>
            <textarea id="commentaire" name="commentaire" rows="5" cols="80"></textarea> <br>

            <label for="note">Note moyenne du restaurant</label>
            <input id="note" name="note" type="number" step="0.5" min="0" max="10"  value=""/> <br>

            <label for="dateVisite">Date de visite</label>
            <input type="date" id="dateVisite" name="dateVisite" value=""/> <br>

            <input type="submit" class="btn btn-primary" id="btnConf" name="btnConf" value="Confirmer"/>

        </fieldset>
    </form>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>
</html>