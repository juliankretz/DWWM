<?php

function direBonjour(): void
{
    echo "<h1>Bonjour</h1>";
}

function DireBonjourAQui(string $nom) : string
{
    return "<p>Bonjour $nom</p>";
}

direBonjour();
direBonjour();

echo DireBonjourAQui('Toto');

$bonjour = DireBonjourAQui('Titi');
echo $bonjour;

$nom = "Julian";

echo '<p>Bonjour ' . $nom . '</p>';

require 'footer.php';