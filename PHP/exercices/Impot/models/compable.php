<?php

class ComptablePublic
{
    private float $revenu;
    private string $nom;

    public Const taux1=0.11;
    public Const taux2=0.30;
    public Const taux3=0.41;
    public Const taux4=0.45;

    public function __construct(string $_nom, float $_revenu)
    {
        $this->nom= $_nom;
        $this->revenu=round($_revenu,2,PHP_ROUND_HALF_UP);
    }

    public function getRevenu():float
    {
        return $this->revenu;
    }

    public function getNom():string
    {
        return $this->nom;
    }

    public function setNom($_nouveau_nom):void
    {
        $this->nom=$_nouveau_nom;
    }

    public function calculImpot():string
    {
        $chaine= "M(e) ".$this->nom." votre impôt sur le revenu est de : ";

        switch($this->revenu)
        {
            case ($this->revenu >= 10778 && $this->revenu <= 27478):
                $this->impot= ($this->revenu-10777)*self::taux1;
                break;

            case ($this->revenu >= 27479 && $this->revenu <= 78570):
                $this->impot= (27478-10778)*self::taux1+($this->revenu-27478)*self::taux2;
                break;

            case ($this->revenu >= 78571 && $this->revenu <= 168994):
                $this->impot= ((27478-10778)*self::taux1)+((78570-27479)*self::taux2)+($this->revenu-78570)*self::taux3;
                break;

            case ($this->revenu > 168994):
                $this->impot= ((27478-10778)*self::taux1)+((78570-27479)*self::taux2)+((168994-78571)*self::taux3)+($this->revenu-168994)*self::taux4;
                break;

            default;
                $this->impot= 0;
                break;
        }

        // if ($this->revenu <=1500)
        // {
        //     $this->impot= $this->revenu*self::taux1;
        // }

        // else
        // {
        //     $this->impot= 15000*self::taux1 + ($this->revenu-15000)*self::taux2;
        // }

        $this->impot=round($this->impot,2);

        $chaine.=$this->impot." €";

        return $chaine;
    }
}