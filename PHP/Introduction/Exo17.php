<?php

$element = ["Dutch", "Arthur", "John"];
$name = "Liste des personnes";

function HtmlList(string $_name, array $_element):string
{    
    $chaine = "";

    if (count($_element) == 0)
    {
        $chaine .= "<p> Aucun résultat </p>"; 
    }

    else
    {
        $chaine .= "<h3>".$_name."</h3> <ul>";

        for ($i=0; $i < count($_element); $i++)
        { 
            $chaine .= "<li>".$_element[$i]."</li>";
        }

        $chaine .= "</ul>";
    }

    return $chaine;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ma première fonction tableau liste</title>
</head>
<body>
    <?php echo HtmlList($name, $element); ?>
</body>
</html>