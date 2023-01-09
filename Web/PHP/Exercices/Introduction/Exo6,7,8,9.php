<?php

// Exercice 6

function Somme($a,$b):int
{
    return ($a+$b);
}
echo Somme(5,5) . "<br>";

// Exercice 7

function Soustraction($a,$b):int
{
    return ($a-$b);
}
echo Soustraction(5,3) . "<br>";

// Exercice 8

function Multiplication($a,$b):int
{
    return ($a*$b);
}
echo Multiplication(5,3) . "<br>";

// Exercice 9

function Division($a,$b):float
{
    if ($b == 0)
    {
        $resultat = 0;
    }

    else
    {
        $resultat = ($a/$b);
    }

    return (number_format($resultat,2));
}
echo Division(10,3);
