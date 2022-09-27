<?php

// 4.A

function isMajor($age):bool
{
    if ($age >= 18)
    {  
        return true;
    }
    else 
    {
        return false;
    }
}
echo isMajor(25) . PHP_EOL;

//4.B

function getRetired($age):string
{
    if ($age == 60) 
    {
        return "Vous êtes à la retraite cette année";
    } 
    else if ($age < 60 && $age > 0)
    {
        return "Il vous reste " . (60 - $age) . " ans avant la retraite";
    }
    else if ($age > 60)
    {
        return "Vous êtes à la retraite depuis " . ($age - 60) . " ans";
    }
    else 
    {
        return "Âge invalide";
    }
}
echo getRetired(40) . PHP_EOL;

//4.C

function getMax($a,$b,$c):int 
{
    if (($a == $b) || ($a == $c) || ($b == $c))
        {
            return 0;
        }        
    else {
        if (($a > $b) && ($a > $c))   
        {
        return ($a);
        }
        else if (($b > $a) && ($b > $c)) 
        {
            return ($b);
        }
        else if (($c > $a) && ($c > $b))
        {
            return ($c);
        }
    }
}
echo getMax(1,2,3) . PHP_EOL;

// 4.D

function capitalCity($cntry):string
{
    if ($cntry == "France")
    {
        return "Paris";
    }
    else if ($cntry == "Allemagne")
    {
        return "Berlin";
    }
    else if ($cntry == "Italie")
    {
        return "Rome";
    }
    else if ($cntry == "Maroc")
    {
        return "Rabat";
    }
    else if ($cntry == "Espagne")
    {
        return "Madrid";
    }
    else if ($cntry == "Portugal")
    {
        return "Lisbonne";
    }
    else if ($cntry == "Angleterre")
    {
        return "Londres";
    }
    else 
    {
        return "Capitale inconnue";
    }
}
echo capitalCity("France");