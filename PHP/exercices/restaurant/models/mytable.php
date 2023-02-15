<?php

require "connection.php";

class MyTable
{
    public static PDO $connection;
    public string $table;
    public PDOStatement $statement;    
    public array $columns;

    public function __construct(PDO $_connect, string $_table)
    {
        self:: $connection = $_connect;
        $this->table = $_table;
        $sql = "SELECT  * FROM " . $this->table; 
        $this->statement = self::$connection->prepare($sql);
        $this->statement->execute();
        $this->columns = [];
    }

    private function createTableTitle():array
    {
        
        $nbColumn = $this->statement->columnCount();
        for ($i=0; $i < $nbColumn; $i++)
        {
            $tabInfo = $this->statement->getColumnMeta($i);
            $res = $tabInfo["name"];
            if (count($tabInfo["flags"])>1 && $tabInfo["flags"][1] == "primary_key")
            {
                array_push($this->columns, $res." primary_key");
            }
            else
            {
                array_push($this->columns, $res);
            }
        }
        return $this->columns;
    }

    public function afficherTable():string
    {
        $chaine = "<table class='table table-striped' id='tab'> <tbody> <thead> <tr>";
        $tabColumns = $this->createTableTitle();
        for ($i=0; $i < count($tabColumns); $i++)
        {
            $chaine .= "<th>".$tabColumns[$i]."</th>"; 
        }
        $chaine .= "<th>Modifier</th> <th>Supprimer</th> </tr> </thead> </tbody>";
        while ($ligne = $this->statement->fetch())
        {
            $chaine .= "<tr>";
            for ($i=0; $i < count($ligne); $i++)
            {
                $chaine .= "<td>".$ligne[$i]."</td>";
            }
            $chaine .= "<td> <a href='./modifier.php?id=".$ligne[0]."' target='_blank'>Modifier</a> </td>";
            $chaine .= "<td> <input type='button' class='btn btn-primary' value='Supprimer' id='btnSup".$ligne[0]."' name='btnDel".$ligne[0]."'/> </td>";
            $chaine .= "</tr>";
            
        }
        $chaine .= "</tbody>";
        
        return $chaine;
    }

    public function rechercherLigne(int $_id)
    {
        $this->columns = $this->createTableTitle();

        $cle = substr($this->columns[0], 0, -11);
        $sql="SELECT * FROM ".$this->table." WHERE ".$cle."= :id";
        $rechercheStatement = self::$connection->prepare($sql);
        $rechercheStatement->bindParam(":id", $_id, PDO::PARAM_INT);
        $rechercheStatement->execute();
        $res = $rechercheStatement->fetch();
        return $res;
    }


    public function updateTable($_id, $_nom, $_adresse, $_prixMoyen, $_commentaire, $_note, $_date):bool
    {
       




        $res = self::$connection->exec(" UPDATE `restaurants` SET `nom`='$_nom',`adresse`='$_adresse',`prix_moyen`='$_prixMoyen',`commentaire`='$_commentaire',`note`='$_note',`visite`='$_date' WHERE `id`=$_id");
        echo  "UPDATE `restaurants` SET `nom`='$_nom',`adresse`='$_adresse',`prix_moyen`='$_prixMoyen',`commentaire`='$_commentaire',`note`='$_note',`visite`='$_date' WHERE `id`=$_id";
        // $majStatement = self::$connection->prepare($mySql);
        // $majStatement->bindParam(":id", $_id, PDO::PARAM_INT);
        // $majStatement->bindParam(":nom", $_nom, PDO::PARAM_STR);
        // $majStatement->bindParam(":adresse", $_adresse, PDO::PARAM_STR);
        // $majStatement->bindParam(":prix", $_prixMoyen, PDO::PARAM_STR);
        // $majStatement->bindParam(":commentaire", $_commentaire, PDO::PARAM_STR);
        // $majStatement->bindParam(":note", $_note, PDO::PARAM_INT);
        // $majStatement->bindParam(":visite", $_date, PDO::PARAM_STR);
        return $res;
    }


}