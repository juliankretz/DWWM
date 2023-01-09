<?php

// Exercice 10

function EstMajeur($age):string
{
    if ($age < 18)
    {
        $major = "false";
    }

    else
    {
        $major = "true";
    }

    return $major;
}
echo EstMajeur(16) . "<br>";

// Exercice 11

function CalculRetraite($age):string
{
    if ($age < 60 && $age > 0)
    {
        $resulat = "Vous serez en retraite dans " . (60-$age) . " ans";
    }

    else if ($age > 60 && $age > 0)
    {
        $resulat = "Vous êtes déjà en retraite depuis " . ($age-60) . " ans"; 
    }

    else if ($age = 60 && $age > 0)
    {
        $resulat = "Vous serez en retraite cette année";
    }

    else
    {
        $resulat = "Vous n'êtes pas encore né";
    }
  
    return $resulat;
}
echo CalculRetraite(42);