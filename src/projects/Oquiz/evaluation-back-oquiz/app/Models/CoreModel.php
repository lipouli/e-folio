<?php

namespace oquiz\Models;

use oquiz\Database;
use PDO;

abstract class CoreModel {

  protected $id;
  // mathode pour sauvegarder le model en bdd
  public function save() {
    // récupération de la requete sql selon le cas
    if ($this->id > 0) {
      // update si existe deja
      $sql = $this->getUpdateSql();
    } else {
      // sinon sauvegarde
      $sql = $this->getInsertSql();
    }
    // récupération du pdo
    $sth = Database::getPDO()->prepare($sql);
    // insertion des valeur pour la requete
    $sth = $this->getBindValue($sth);
    // execution
    $result = $sth->execute();
    // recupération de l'id si création
    $this->id = ($this->id > 0 && $result) ? $this->id : Database::getPDO()->lastInsertId();
    return $result;
  }
  // methode pour recupérer sql pour update
  protected abstract function getUpdateSql();
  // methode pour récupérer sql pour insert
  protected abstract function getInsertSql();
  // methode pour insérer donnée pour requete
  protected abstract function getBindValue($sth);
  // methode pour trouver tout les ligne
  public static function findAll() {
    $sql = "
      SELECT *
      FROM ". static::TABLE_NAME ."
    ";
    $pdoStatement = Database::getPDO()->query($sql);
    $results = $pdoStatement->fetchAll(PDO::FETCH_CLASS, static::class);
    return $results;
  }
  // methode pour récupérer selon id
  public static function find($id) {
    // Requete SQL avec prepare
    $sql = "
      SELECT *
      FROM " . static::TABLE_NAME . "
      WHERE id = :id
    ";

    $pdoStatement =Database::getPDO()->prepare($sql);
    // Attribution des valeurs avec bindValue
    $pdoStatement->bindValue(':id', $id, PDO::PARAM_INT);
    $pdoStatement->execute();
    $result = $pdoStatement->fetchObject(static::class);

    return $result;

  }

  public function getId() {
    return $this->id;
  }
}
