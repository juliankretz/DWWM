<?php

// 3.A

function getMC2($MC2Inv):string
{
    return $MC2Inv;
}
echo getMC2("Albert Einstein") . PHP_EOL;

// 3.B

function getUserName($firstName,$name):string
{
    return $firstName . $name;
}
echo getUserName("julian","kretz") . PHP_EOL;

// 3.C

function getFullName($firstName,$name):string
{
    return $firstName . " " . $name;
}
echo getFullName("Julian","KRETZ") . PHP_EOL;

// 3.D

function askUser($firstName,$name,$albEins):string
{
    return "Bonjour " . $firstName . " " . $name . ", connaissez-vous " . $albEins . " ?";
}
echo askUser("Julian","Kretz", "Albert Einstein") . PHP_EOL;