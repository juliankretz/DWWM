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
            $chaine .= "<td> <input type='button' class='btn btn-danger' value='Supprimer' id='".$ligne[0]."' name='btnDel".$ligne[0]."'/> </td>";
            $chaine .= "</tr>";
            
        }
        $chaine .= "</tbody> </table> <form id='formSupp' action='".$_SERVER["PHP_SELF"]."' method='POST'> <input type='hidden' name='suppRow' id='suppRow' /> </form>";
        $chaine .= "<input type='button' class ='btn btn-primary' id='btnAdd' name='btnAdd' value='Ajouter une ligne'/> <br>";
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


    public function updateTable(int $_id, string $_nom, string $_adresse, float $_prixMoyen, string $_commentaire, float $_note, string $_date):bool
    {
       


        $sql = "UPDATE ".$this->table." SET `nom`=:nom,`adresse`=:adresse,`prix_moyen`=:prix,`commentaire`=:commentaire,`note`=:note,`visite`=:visite WHERE `id`=:id";

      //  echo $sql;
        $majStatement = self::$connection->prepare($sql);
        $majStatement->bindParam(":id", $_id, PDO::PARAM_INT);
        $majStatement->bindParam(":nom", $_nom, PDO::PARAM_STR);
        $majStatement->bindParam(":adresse", $_adresse, PDO::PARAM_STR);
        $majStatement->bindParam(":prix", $_prixMoyen, PDO::PARAM_STR);
        $majStatement->bindParam(":commentaire", $_commentaire, PDO::PARAM_STR);
        $majStatement->bindParam(":note", $_note, PDO::PARAM_STR);
        $majStatement->bindParam(":visite", $_date, PDO::PARAM_STR);

        $res = $majStatement->execute();
        return $res;
    }

    public function deleteRow(int $_id):bool
    {
        $sql = "DELETE FROM ".$this->table." WHERE id = ?";
        $deleteStatement = self::$connection->prepare($sql);
        $resu = $deleteStatement->execute([$_id]);
        return $resu;   

    }

    function createRow(string $_nom, string $_adresse, float $_prix, string $_commentaire, float $_note, string $_date)
    {
        $sql = "INSERT INTO ".$this->table." VALUES (id, ?, ?, ?, ?, ?)";
        $createStatement = self::$connection->prepare($sql);
        $resCreate = $createStatement->execute( array($_nom, $_adresse, $_prix, $_commentaire, $_note, $_date));
        return $resCreate;
    }

}