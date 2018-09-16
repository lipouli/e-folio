<?php
namespace oquiz;

use PDO;
use Exception;

class Database {

  private $dbh;
  private static $_instance;
  private function __construct() {
    $config = parse_ini_file(__DIR__.'/config.conf');
    $host = $config['DB_HOST'];
    $dbname = $config['DB_NAME'];
    $user = $config['DB_USERNAME'];
    $pass = $config['DB_PASSWORD'];
    try {
      $this->dbh = new PDO(
        "mysql:host={$host};dbname={$dbname};charset=utf8",
        $user,
        $pass,
        array(PDO::ATTR_ERRMODE => PDO::ERRMODE_WARNING)
      );
    }
    catch(Exception $exception) {
      die('Erreur de connexion...' . $exception->getMessage());
    }
  }

  public static function getPDO() {
    if (empty(self::$_instance)) {
      self::$_instance = new Database();
    }
    return self::$_instance->dbh;
  }
}
