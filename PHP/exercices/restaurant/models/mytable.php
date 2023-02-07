<?php

require "connection.php";

class MyTable
{
    public static PDO $connection;
    public string $table;
    public PDOStatement $statement;    

    public function __construct(PDO $_connect, string $_table)
    {
        self:: $connection = $_connect;
        $this->table = $_table;
        $sql = "SELECT  * FROM " . $this->table; 
        $this->statement = self::$connection->prepare($sql);
        $this->statement->execute();
    }

    public function afficherTable():array
    {
        return $this->statement->fetchAll();
    }

    public function updateTable($_id, $_nom, $_adresse, $_prixMoyen, $_commentaire, $_note, $_date):bool
    {
        $mySql = "UPDATE restaurants SET nom = :nom, adresse = :adresse, prix_moyen = :prix, commentaire = :commentaire, note = :note, visite = :visite WHERE id = :id ";
        $majStatement = self::$connection->prepare($mySql);
        $majStatement->bindParam(":id", $_id, PDO::PARAM_INT);
        $majStatement->bindParam(":nom", $_nom, PDO::PARAM_STR);
        $majStatement->bindParam(":adresse", $_adresse, PDO::PARAM_STR);
        $majStatement->bindParam(":prix", $_prixMoyen, PDO::PARAM_STR);
        $majStatement->bindParam(":commentaire", $_commentaire, PDO::PARAM_STR);
        $majStatement->bindParam(":note", $_note, PDO::PARAM_INT);
        $majStatement->bindParam(":visite", $_date, PDO::PARAM_STR);
        return $majStatement->execute();
    }


}