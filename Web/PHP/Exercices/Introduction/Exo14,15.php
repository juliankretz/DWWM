<?php

$leMdp = "bniezogbzie";

// Exercice 14

function PasswordLength($mdp):string
{
    if (strlen($mdp) < 8)
    {
        $test = "true";
    }

    else
    {
        $test = "false";
    }

    return $test;
}
echo PasswordLength($leMdp) . "<div>";

// Exercice 15

function PasswordCheck(string $mdp):bool
{
    $test;

    if (strlen($mdp) >= 8 && preg_match('#[a-z]+#', $mdp) && preg_match('#[A-Z]+#', $mdp) && preg_match('#[0-9]+#', $mdp))
    {
        $test = true;
    }

    else
    {
        $test = false;
    }

    return $test;
}
if (!PasswordCheck($leMdp))
{
    echo "mdp incorrect";
}
else
{
    echo "mdp enregistré";
}