<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Guide duchemin</title>
</head>
<body>
    
<?php

    require "./models/connection.php";
    $maconnection = Connection::getInstance();
    $rq = "select * from restaurants";
    $pdoStatement = $maconnection->prepare($rq);
    $pdoStatement->execute();

    function getFieldName($_pdoStatement):array
    {
        $tabName= Array();

        for ($i=0; $i < $_pdoStatement->columnCount(); $i++)
        {
            $tabInfo = $_pdoStatement->getColumnMeta($i);
            array_push($tabName, $tabInfo["name"]);
        }
        return $tabName;
    }

    $tabNames = getFieldName($pdoStatement);

    $chaine = "<table class='table table-striped' id='tab'><thead>";

    for ($i=0; $i < count($tabNames); $i++)
    {
        $chaine .= "<th>".$tabNames[$i]."</th>";
    }

    $chaine .= "</thead> <tbody>";

    while( $ligne = $pdoStatement->fetch())
    {
        $chaine .= "<tr>";


        for ($i=0; $i < count($ligne); $i++)
        {
            $chaine .= "<td>".$ligne[$i]."</td>";
        }

        $chaine .= "</tr>";
    }

    $chaine.="</tbody> </table>"; 
    echo $chaine;

?>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
</body>


</html>

