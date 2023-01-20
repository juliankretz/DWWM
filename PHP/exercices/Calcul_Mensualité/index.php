<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calcul de mensualité d'un prêt</title>
      <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <?php
            require ("./models/formulaire.php");
            $monFinancier = null;
            if (!empty($_POST["capital"]) && !empty($_POST["taux"]) && !empty($_POST["duree"]))
            {
                $monFinancier = new Financier($_POST["capital"], $_POST["taux"], $_POST["duree"], $_POST["nom"], $_POST["frais"]);
                $mensualite = $monFinancier->calculMensualite();
            }
        ?>
        <form action="index.php" method="POST">
            <fieldset>
                Votre nom <input type="text" name="nom" id="nom" placeholder="<?=$_POST["nom"]??"0";?>"/> <br> <br>

                Capital emprunté <input type="number" name="capital" id="capital" step="1000" placeholder="<?=$_POST["capital"]??"0";?>"/> <br> <br> 

                Taux intérêt en % <input type="number" name="taux" id="taux" step="0.1" placeholder="<?=$_POST["taux"]??"0";?>"/> <br> <br>

                Année(s) de remboursement <input type="number" name="duree" id="duree" step="1" placeholder="<?=$_POST["duree"]??"0";?>"/> <br> <br>

                frais de dossier <input type="number" name="frais" id="frais" value="50"/> <br> <br>

                <input type="submit" value="Valider" name="validation" id="validation"/>

                Mensualité : <input name="result" id="result" placeholder="<?=round($mensualite, 2)??"Remplissez les champs";?>"/> <br>
            </fieldset>
        </form>
        <div id="part">
            <br>
            <?php
                if (!empty($_POST["capital"]) && !empty($_POST["taux"]) && !empty($_POST["duree"]))
                {
                    echo $monFinancier->CreationTabAmortissement();
                }
            ?>
        </div>
    </body>

</html>