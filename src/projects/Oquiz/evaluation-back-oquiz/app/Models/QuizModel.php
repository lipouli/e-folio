<?php

namespace oquiz\Models;

use oquiz\Database;
use PDO;

class QuizModel extends CoreModel {

  private $title;
  private $description;
  private $id_author;

  const TABLE_NAME = 'quizzes';

  protected function getInsertSql() {
    $sql = "
      INSERT INTO ". self::TABLE_NAME ."
      (
        id,
        title,
        description,
        id_author
      )
      VALUES
      (
        :id,
        :title,
        :description,
        :id_author
      )
    ";
    return $sql;
  }

  protected function getUpdateSql() {
  $sql = "
    UPDATE ". self::TABLE_NAME ." SET
    title = :title,
    description = :description,
    id_author = :id_author
    WHERE id = :id
  ";
  return $sql;
  }

  protected function getBindValue($sth) {
    $sth->bindValue(':title', $this->title, PDO::PARAM_STR);
    $sth->bindValue(':description', $this->description, PDO::PARAM_STR);
    $sth->bindValue(':id_author', $this->id_author, PDO::PARAM_INT);
    $sth->bindValue(':id', $this->id, PDO::PARAM_INT);
    return $sth;
  }

  // Methode pour récupérer tout les quizz avec leur auteur
  public static function findAllWithAuthor() {
    $sql = "
      SELECT * , users.id as authorId, quizzes.id as id
      FROM ". self::TABLE_NAME ." as quizzes
      LEFT JOIN ". UserModel::TABLE_NAME ." as users
      ON id_author = users.id
    ";
    $pdoStatement = Database::getPDO()->query($sql);
    $quizzes = $pdoStatement->fetchAll(PDO::FETCH_CLASS, self::class);
    return $quizzes;
  }
  // methode pour récupérer les quizz d'un auteur
  public static function findAllByAuthor($id) {
    $quizzes = self::findAllWithAuthor();
    $quizzesByAuthor = array_filter($quizzes, function($quiz) use($id) {
      return $quiz->getIdAuthor() == $id;
    });
    return $quizzesByAuthor;
  }
  // pour récupérer un quiz et son auteur
  public static function findWithAuthor($id) {
    $sql = "
      SELECT *, q.id as id, u.id as authorId
      FROM " . self::TABLE_NAME . " as q
      LEFT JOIN ". UserModel::TABLE_NAME ." as u
      ON q.id_author = u.id
      WHERE q.id = :id
    ";

    $pdoStatement =Database::getPDO()->prepare($sql);
    // Attribution des valeurs avec bindValue
    $pdoStatement->bindValue(':id', $id, PDO::PARAM_INT);
    $pdoStatement->execute();
    $result = $pdoStatement->fetchObject(self::class);

    return $result;
  }

  // Getter
  public function getTitle() {
      return $this->title;
  }

  public function getDescription() {
    return $this->description;
  }

  public function getIdAuthor() {
    return $this->id_author;
  }

  // Setter
  public function setTitle($title) {
    if(!empty($title) && is_string($title)) {
      $this->title = $title;
    }
  }

  public function setDescription($description) {
    if(!empty($description) && is_string($description)) {
      $this->description = $description;
    }
  }

  public function setIdAuthor($id_author) {
    if(!empty($id_author) && is_numeric($id_author)) {
      $this->id_author = $id_author;
    }
  }

}

 ?>
