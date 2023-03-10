<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<?php

session_start();
require "./connection.php";

if (isset($_POST["btnSub"]) )
{
    if(!empty($_POST["enterMail"]) && !empty($_POST["enterPwd"]))
    {
        $sql ="SELECT * FROM utilisateurs WHERE mail_user = ?";
        $myPDO = Connection::getInstance();
        $myStatement = $myPDO->prepare($sql);
        $myStatement->execute([$_POST["enterMail"]]);
        $nbRow = $myStatement->rowCount();
        if ($nbRow == 1)
        {
            $ligne = $myStatement->Fetch();
            $test = password_verify($_POST["enterPwd"], $ligne["pass_user"]);
            if ($test == true)
            {
                $_SESSION["login"]=$ligne["lastname_user"];
                header("location: ./liste.php");
            }
            else
            {
                echo "Utilisateur ou Mot de passe éronné";
            }
        }
        else
        {
            echo "Utilisateur ou Mot de passe éronné";
        }
    }
    else
    {
        echo "Veuillez remplir tous les champs";
    }
}

?>

<form method="POST" action="index.php">
<fieldset>
    <h2>Accès membres</h2>
    Entrez votre adresse email :
    <br>
    <input type="text" id="enterMail" name="enterMail" maxlength="150" value=""/>
    <br> <br>
    Entrez votre mot de passe :
    <br>
    <input type="text" id="enterPwd" name="enterPwd" maxlength="250" value=""/>
    <br> <br>
    <input type="submit" id="btnSub" name="btnSub" value="Se connecter"/>
</fieldset>
</form>


</body>
</html>