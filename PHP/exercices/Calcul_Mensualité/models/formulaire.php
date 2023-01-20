<?php

class Financier
{
    private float $capital;
    private float $taux;
    private int $duree;
    private string $nom;
    private float $frais;

    public function __construct(string $_capital, float $_taux, int $_duree, string $_nom, float $_fraisDossier)
    {
        $this->capital = round($_capital, 2);
        $this->duree = $_duree*12;
        $this->taux = $_taux/1200;
        $this->nom = $_nom;
        $this->frais = $_fraisDossier;
    }

    public function getCapital():float
    {
        return $this->$capital;
    }

    public function getTaux():float
    {
        return $this->$taux;
    }

    public function getDuree():int
    {
        return $this->$duree;
    }

    public function calculMensualite():float
    {
        $Q = 1-pow((1+$this->taux), - $this->duree);
        $mensualite = ($this->capital * $this->taux)/$Q;

        return $mensualite;
    }
    
    public function CreationTabAmortissement():string
    {
        $somme = 0;
        $chaine = "<table class='table table-striped'> <caption>" . $this->nom . "</caption> <thead> <tr> <th>numéro de mois</th> <th>part intérets</th>
        <th>part armortissement</th> <th>capital restant dû</th> <th>mensualité</th> </tr> </head> <tbody>";

        for ($i=0; $i < $this->duree; $i++)
        {

            $chaine .= "<tr>";

            if ($i == 0)
            {
                $restantDu = $this->capital;
            }

            else
            {
                $restantDu = $restantDu - $partAmort;
            }

            $partInteret = $restantDu * $this->taux;
            $partAmort = $this->calculMensualite() - $partInteret;
            $somme += $partInteret;

            $chaine .= "<td>" . ($i+1) . "</td> <td>" . round($partInteret,2) . "</td> <td>" . round($partAmort,2) . "</td> 
            <td>" . round($restantDu,2 ) .  "</td> <td>" . round($this->calculMensualite(), 2) . "</td> </tr>";
        }
        $somme += $this->frais;
        $chaine .= "</tbody> </table> <h3> Coup total du crédit : " . round($somme,2) . " €</h3>";
        return $chaine;
    }

}