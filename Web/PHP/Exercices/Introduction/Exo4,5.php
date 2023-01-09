<?php

$p = Julian;
$n = Kretz;

function Concatenation($p,$n):string
{
    return ($p . " " . $n);
}
echo concatenation() . "<br>";


// Exercice 5

function Concatenation2($p,$n):string
{
    return ($p . " " . strtoupper($n));
}
echo concatenation2();