<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calcul de l'impôt sur le revenu</title>

        <style>
            fieldset 
            {
                width:30%;
                border-radius:12px;
                background-color:#ccc;
                margin-left:auto;
                margin-right:auto;
            }

            input
            { margin-bottom:12px; }

            p
            { text-align:center; }
        </style>

    </head>

    <body>

      <?php
       
      //  var_dump($_POST);

      
      ?>

            <form action="index.php" method="POST" >
            <fieldset> <legend>coordonnées fiscale</legend>

                <input type="text" name="lenom" maxlength="30" id="lenom" placeholder="votre nom" size="20"  value="
                    <?php
                        if (!empty($_POST["lenom"]))
                        {
                            echo $_POST["lenom"];
                        }

                        else
                        {
                            echo "Vide";
                        }
                    ?>
                "/> <br/>
                <input type="text" name="revenu" id="revenu" step="0.01" placeholder="votre revenu annuel" value="
                    <?php
                    $chaine = $_POST["revenu"]?? "Vide";
                    echo $chaine;
                    ?>
                " /> <br/>
                <input type="submit" value="calculer" name="validation" id="Validation"/>

              </fieldset>
            </form>   

            <?php
            require("./models/comptable.php");
            if (isset($_POST["validation"]))
            {
                $monObj= new ComptablePublic($_POST["lenom"], $_POST["revenu"]);
                $test= $monObj->calculImpot();
                echo "<p>".$test."</p>";
            }
        ?>

    </body>

</html>