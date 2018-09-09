<?php

namespace oquiz\Controllers;

use oquiz\Models\QuizModel;

class MainController extends CoreController{
  // methode d'affichage de la page accueil
  public function home(){
    // récupération de tous les quizz
    $quizzes = QuizModel::findAllWithAuthor();
    echo $this->templates->render('main/home', array(
      'quizzes' => $quizzes,
    ));
  }
}
