<?php

namespace oquiz\Controllers;

use oquiz\Models\UserModel;
use oquiz\Models\QuizModel;
use oquiz\Utils\User;

class UserController extends CoreController {
  // methode affichage page de conection
  public function signin() {
    echo $this->templates->render('user/signin');
  }
  // methode pour gérer la conection
  public function signinPost() {
    $errorList = [];
    $success = false;
    // récupération des donnée
    $email = (!empty($_POST['email'])) ? trim($_POST['email']) : '';
    $password = (!empty($_POST['password'])) ? trim($_POST['password']) : '';
    // vérification des donnée
    if (empty($email)) {
      $errorList[] = "L'adresse email doit être renseignée";
    }
    if (empty($password)) {
      $errorList[] = "Le mot de passe doit être renseigné";
    }
    // si pas d'erreur
    if (count($errorList) == 0) {
      // récupération de l'utilisateur par le mail
      $userModel = UserModel::findByEmail($email);
      // vérification de l'existancce de l'utilisateur dans la bdd
      if ($userModel) {
        // vérification du mot de passe
        if (password_verify($password, $userModel->getPassword())) {
          // si existe alors enregistrement en session de l'utilisateur
          User::setUser($userModel);
        } else {
          $errorList[] = 'Le mot de passe est incorrect pour cet email';
        }
      } else {
        $errorList[] = 'Aucun compte n\' a été trouvé pour cet email';
      }
    }
    // préparation de la réponse au client
    $success = (count($errorList)) ? false : true;
    $serializeUser = serialize(User::getUser());
    $jsonUser = json_encode($serializeUser);
    $response = [
      'success' => $success,
      'errorList' => $errorList,
      'type' => 'login',
      'url' => $this->router->generate('main_home'),
      'user' => $jsonUser,
    ];
    $this->sendJSON($response);
  }
  // methode pour la déconnection
  public function logout() {
    if (User::isConnected()) {
      User::logout();
      $this->redirectToRoute('main_home');
    } else {
      $this->redirectToRoute('user_signin');
    }
  }
  // methode pour affichage de la page profile
  public function profile() {
    if(User::isConnected()) {
      // récupération de l'id de l'user
      $userID = User::getUser()->getId();
      // récupération des quizz de l'user
      $userQuizzes = QuizModel::findAllByAuthor($userID);
      echo $this->templates->render('user/profile', array(
        'quizzes' => $userQuizzes,
      ));
    } else {
      $this->redirectToRoute('user_singin');
    }
  }
}
