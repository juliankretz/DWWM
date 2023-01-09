<?php

/**
 * La classe ingrédient représente un ingrédient d'une recette
 */
class Ingredient
{
    /** @var string $nom Le nom de l'ingrédient */
    private string $nom;

    /** @var float $quantite La quantite l'ingrédient dans la recette */
    private float $quantite;

    /** @var string $uniteMesure L'unité de mesure utilisé pour la quantité */
    private string $uniteDeMesure;

    /** @var Ustentile[] $ustensiles les ustensiles nécessaires pour manipulr l'ingrédient */
    private array $ustensiles;

    public function __construct(string $nom)
    {
        $this->setNom($nom);
        $this->quantite = 0;
        $this->uniteDeMesure = "g";
    }

    public function getNom(): string
    {
        return $this->nom;
    } 

    /**
     * Définit un nouveau nom pour l'ingrédient
     * Le nom doit respecter les conditions suivantes;
     * 2 caractères minimum, uniquement lettres, chiffres et tiret (-)
     * @param string $nouveauNom Le nouveau nom de l'ingrédient
     * @throws Exception Le format du nouveau nom est incorrect
     */

    public function setNom(string $nouveauNom): void
    {
        if (mb_strlen($nouveauNom) >= 2)
        {
            $this->nom = $nouveauNom;
        }
        else 
        {
            throw new Exception('Le nouveau nom est invalide !');
        }        
    }

    public function copyTo(Ingredient $autreIngredient): variant_mod
    {
        $autreIngredient->nom = $this->nom;
        //$autreIngredient->setNom($this->getNom());
    } 
}   