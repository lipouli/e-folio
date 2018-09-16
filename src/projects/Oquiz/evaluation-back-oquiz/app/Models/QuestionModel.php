<?php

namespace oquiz\Models;

use oquiz\Database;
use PDO;

class QuestionModel extends CoreModel {

  private $id_quiz;
  private $question;
  private $prop1;
  private $prop2;
  private $prop3;
  private $prop4;
  private $id_level;
  private $anecdote;
  private $wiki;

  const TABLE_NAME = "questions";

  protected function getInsertSql() {
    // TODO:
  }

  protected function getUpdateSql() {
    // TODO:
  }

  protected function getBindValue($sth) {
    // TODO:
  }

  // Trouve toutes les questions d'un quiz
  public static function findAllByQuizId($id) {
    $sql = "
      SELECT *, q.id as id, l.id as levelId, l.name as levelName
      FROM ". self::TABLE_NAME ." as q
      LEFT JOIN levels as l
      ON q.id_level = l.id
      WHERE q.id_quiz = :id
    ";
    $pdoStatement = Database::getPDO()->prepare($sql);
    $pdoStatement->bindValue(':id', $id, PDO::PARAM_INT);
    $pdoStatement->execute();
    $questions = $pdoStatement->fetchAll(PDO::FETCH_CLASS, self::class);

    return $questions;

  }

  // Méthode pour récupérer la liste des réponses mélangé
  public function getShuffledProp() {
    // création du tableau
    $propArray = array(
      $this->prop1,
      $this->prop2,
      $this->prop3,
      $this->prop4,
    );
    // mélange du tableau
    shuffle($propArray);
    // on renvois le tableau
    return $propArray;
  }
  // methode pour coriger les réponses
  public static function correction($id, $response) {
    // récupération de l'id de la question
    $question = self::find($id);
    // vérifie si la réponse donnée corespond à la première proposition de la question
    $correctResponse = $question->getProp1();
    // préparation de la correction a renvoyer
    $correction = array(
      'isCorrect' => $correctResponse == $response,
      'anecdote' => $question->getAnecdote(),
      'wiki' => $question->getWiki(),
    );
    return $correction;
  }

  // Getters
  public function getIdQuiz() {
    return  $this->id_quiz;
  }

  public function getQuestion() {
    return  $this->question;
  }

  public function getProp1() {
    return  $this->prop1;
  }

  public function getProp2() {
    return  $this->prop2;
  }

  public function getProp3() {
    return  $this->prop3;
  }

  public function getProp4() {
    return  $this->prop4;
  }

  public function getIdLevel() {
    return  $this->id_level;
  }

  public function getAnecdote() {
    return  $this->anecdote;
  }

  public function getWiki() {
    return  $this->wiki;
  }

  // Setters
  public function setIdQuiz($id_quiz) {
    if(!empty($id_quiz) && is_numeric($id_quiz)) {
      $this->id_quiz = $id_quiz;
    }
  }

  public function setQuestion($question) {
    if(!empty($question) && is_string($question)) {
      $this->question = $question;
    }
  }

  public function setProp1($prop1) {
    if(!empty($prop1) && is_string($prop1)) {
      $this->prop1 = $prop1;
    }
  }

  public function setProp2($prop2) {
    if(!empty($prop2) && is_string($prop2)) {
      $this->prop2 = $prop2;
    }
  }

  public function setProp3($prop3) {
    if(!empty($prop3) && is_string($prop3)) {
      $this->prop3 = $prop3;
    }
  }

  public function setProp4($prop4) {
    if(!empty($prop4) && is_string($prop4)) {
      $this->prop4 = $prop4;
    }
  }

  public function setIdLevel($id_level) {
    if(!empty($id_level) && is_numeric($id_level)) {
      $this->id_level = $id_level;
    }
  }

  public function setAnecdote($anecdote) {
    if(!empty($anecdote) && is_string($anecdote)) {
      $this->anectode = $anecdote;
    }
  }

  public function setWiki($wiki) {
    if(!empty($wiki) && is_string($wiki)) {
      $this->wiki = $wiki;
    }
  }

}
