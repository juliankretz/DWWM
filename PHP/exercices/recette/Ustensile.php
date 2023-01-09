<?php

class Ustensile
{
    private string $nom;

    public function __cunstruct(string $sonNom)
    {
        $this->nom = $sonNom;
    }

    public function getNom(): string 
    {
        return $this->nom;
    }
}
