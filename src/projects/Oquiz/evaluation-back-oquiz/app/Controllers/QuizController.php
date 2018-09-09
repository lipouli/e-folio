<?php

namespace oquiz\Controllers;

use oquiz\Models\QuizModel;
use oquiz\Models\QuestionModel;
use oquiz\Utils\User;

class QuizController extends CoreController {
  // methode affichage page q'un quizz
  public function quiz($param) {
    // récupération de l'id du quizz
    $id = $param['id'];
    // on récupère les quiz avec leur auteur
    $quiz = QuizModel::findWithAuthor($id);
    // on ércupère toutes les questions du quizz
    $questions = QuestionModel::findAllByQuizId($id);
    // on définie ici la couleur des différent niveau
    $levelColor = array(
      'Débutant' => '#5cb85c',
      'Confirmé' => '#f0ad4e',
      'Expert' => '#d9534f',
    );
    // on ajoute les donnée dans les templates afin qu'elles soient disponible partout
    $this->templates->addData(array(
      'quiz' => $quiz,
      'questions' => $questions,
      'levelColor' => $levelColor,
    ));
    // et on affiche la page
    echo $this->templates->render('quiz/quiz');
  }
  // methode pour gérer la requète POST pour les réponse
  public function quizPost($param) {
    // on vérifie si le joueur est connecté
    if(User::isConnected()) {
      // on récupère l'id du quiz
      $idQuiz = $param['id'];
      // on récupère le questions du quiz
      $questions = QuestionModel::findAllByQuizId($idQuiz);
      // on initialise le nombre de réponse correct à 0
      $correctAnswer = 0;
      // on récupère la liste des réponses du joueur
      $responseArray = $_POST;
      // on initialise un tableau de correction des réponse
      $correctedArray = [];
      // on réserve l'index 0 du tableau pour pouvoir y mettre le score par la suite
      $correctedArray[] = array();
      // pour chaque réponse du joueur on vérifie si c'est coorect
      foreach($responseArray as $idQuestion => $response){
        // on appelle la méthode correction de QuestionModel pour la question avec la réponse du joueur
        // la méthode nous retourne un tableau associatif avec comme donnée : si la réponse est correct, l'anecdote et le lien wiki de la question
        $correction = QuestionModel::correction($idQuestion, $response);
        // on vérifie si la réponse du joueur est correct et on ajoute 1 a $correctAnswer si c'est le cas
        $correctAnswer += ($correction['isCorrect']) ? 1 : 0;
        // on ajoute les données à notre tableau de correction
        $correctedArray[] = array(
          'id' => $idQuestion,
          'response' => $response,
          'correction' => $correction,
        );
      }
      // on ajoute le score du joueur avec le nombre de question dans le tableau de corerction
      $correctedArray[0] = array(
        'correct' => $correctAnswer,
        'total' => count($questions),
      );
      // on envoi tout en json
      $this->sendJson($correctedArray);
    } else {
      // redirection vers sigin si utilisateur non connecté
      $this->redirectToRoute('user_sigin');
    }
  }
  // Methode affichage page création de quiz
  public function create() {
    if(User::isConnected()){
      echo $this->templates->render('quiz/create');
    } else {
      $this->redirectToRoute('user_signin');
    }
  }
  // Methode pour gérer la création du quiz
  public function createPost() {
    if(User::isConnected()) {
      // initialisation du tableau d'erreur
      $errorList = array();
      // récupération de l'id de l'utilisateur
      $userId = User::getUser()->getId();
      // récupération des donnée post
      $title = isset($_POST['title']) ? $_POST['title'] : '';
      $description = isset($_POST['description']) ? $_POST['description'] : '';
      // vérification des donnée
      if(empty($title)) {
        $errorList[] = 'Vous devez renseigner un titre !';
      }
      if(empty($description)) {
        $errorList[] = 'Vous devez renseigner une description !';
      }
      // si aucune erreur alors on commence l'insertion dans la bdd
      if(count($errorList) == 0) {
        // instanciation d'un objet quizModel
        $quizModel = new QuizModel();
        // insertion des donnée
        $quizModel->setIdAuthor($userId);
        $quizModel->setTitle($title);
        $quizModel->setDescription($description);
        // sauvegarde dans la bdd
        $quizModel->save();
      }
      // préparation de la réponse à renvoyer
      $success = count($errorList) ? false : true;
      $response = array(
        'success' => $success,
        'errorList' => $errorList,
        'url' => $this->router->generate('quiz_quiz', array('id' => $quizModel->getId())),
      );
      // envoie en json
      $this->sendJson($response);

    } else {
      $this->redirectToRoute('user_signin');
    }
  }
}
