<?php

function Capitales(string $pays):string
{
    $capitale;

    switch($pays)
    {
        case "France":
            $capitale = "Paris";
            break;

        case "Allemagne";
            $capitale = "Berlin";
            break;
        
        case "Italie";
            $capitale = "Rome";
            break;

        case "Maroc";
            $capitale = "Rabat";
            break;

        case "Espagne";
            $capitale = "Madrid";
            break;
        
        case "Portugal";
            $capitale = "Lisbonne";
            break;

        case "Angleterre";
            $capitale = "Londres";
            break;

        default;
            $capitale = "Inconnu";
            break;
    }
    
    return $capitale;
}
echo Capitales("Irlande");