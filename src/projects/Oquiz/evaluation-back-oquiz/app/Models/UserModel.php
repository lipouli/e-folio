<?php

namespace oquiz\Models;

use oquiz\Database;
use PDO;

class UserModel extends CoreModel {

  private $first_name;
  private $last_name;
  private $email;
  private $password;

  const TABLE_NAME = 'users';

  protected function getInsertSql() {
    // TODO:
  }

  protected function getUpdateSql() {
    // TODO:
  }

  protected function getBindValue($sth) {
    // TODO: 
  }

  // Methode pour trouver l'user avec son email
  public static function findByEmail($email) {
    $sql = '
        SELECT *
        FROM '. self::TABLE_NAME .'
        WHERE email = :email
      ';
    $pdoStatement = Database::getPDO()->prepare($sql);
    $pdoStatement->bindValue(':email', $email, PDO::PARAM_STR);
    $pdoStatement->execute();
    $result = $pdoStatement->fetchObject(self::class);
    return $result;
  }

  // Getters
  public function getFirstName() {
    return $this->first_name;
  }

  public function getLastName() {
    return $this->last_name;
  }

  public function getEmail() {
    return $this->email;
  }

  public function getPassword() {
    return $this->password;
  }

  // Setters
  public function setFirstName($first_name) {
    if(!empty($first_name) && is_string($first_name)) {
      $this->first_name = $first_name;
    }

  }


  public function setLastName($last_name) {
    if(!empty($last_name) && is_string($last_name)) {
      $this->last_name = $last_name;
    }
  }


  public function setEmail($email) {
    if(!empty($email) && is_string($email)) {
      $this->email = $email;
    }
  }

  public function setPassword($password) {
    if(!empty($password) && is_string($password)) {
      $this->password = $password;
    }
  }

}

 ?>
