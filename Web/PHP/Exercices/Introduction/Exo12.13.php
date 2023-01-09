<?php

$tab = ['France', 'Allemagne', 'Espagne', 'Italie', 'Irlande'];

// Exercice 12

function PremierElementTableau($tab)
{
    if ($tab=='')
    {
       return ("null");
    }

    else
    {
        return ($tab);
    }
}
echo PremierElementTableau($tab[0]) . "<div>";

// Exercice 13

function DernierElementTableau($tab)
{
    if ($tab==' ')
    {
       return ("null");
    }

    else
    {
        return ($tab);
    }
}
//echo DernierElementTableau($tab[max]);
