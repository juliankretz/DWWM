<?php

$Prenom = "Julian";
$Nom = "Kretz";
    
function concatenation()
{
    echo ($prenom + $nom);
}

function concatenation2()
{
    echo ($prenom + " " + strtoupper($nom));
}