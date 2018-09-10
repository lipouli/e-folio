<?php
// Définition du namespace
namespace oquiz;

// Utilisation de Altorouter situé à la racine
use AltoRouter;

class Application {

  private $router;

  public function __construct() {
    $this->router = new AltoRouter();
    // Récupération du base path définie par le htaccess
    // $basePath = isset($_SERVER['BASE_URI']) ? $_SERVER['BASE_URI'] : '';
    // $this->router->setBasePath($basePath);
    // Appelle de la méthode pour définition des routes
    $this->setRoute();
  }

  // Définition des routes pour altorouter
  public function setRoute(){
    $this->router->map('GET', '/', 'MainController#home', 'main_home');
    $this->router->map('GET', '/quiz/[i:id]', 'QuizController#quiz', 'quiz_quiz');
    $this->router->map('POST', '/quiz/[i:id]', 'QuizController#quizPost', 'quiz_quiz_post');
    $this->router->map('GET', '/singup', 'UserController#signup', 'user_signup');
    $this->router->map('POST', '/singup', 'UserController#signupPost', 'user_signup_post');
    $this->router->map('GET', '/singin', 'UserController#signin', 'user_signin');
    $this->router->map('POST', '/singin', 'UserController#signinPost', 'user_signin_post');
    $this->router->map('GET', '/compte', 'UserController#profile', 'user_profile');
    $this->router->map('GET', '/logout', 'UserController#logout', 'user_logout');
    $this->router->map('GET', '/quiz/create', 'QuizController#create', 'quiz_create');
    $this->router->map('POST', '/quiz/create', 'QuizController#createPost', 'quiz_create_post');

  }

  public function run() {
    // récupération du match d'altorouter
    $match = $this->router->match();
    // Si un match a été trouvé
    if($match !== false) {
      // On récupère le nom du controller et de la méthode
      list($controllerName, $methodName) = explode('#', $match['target']);
      // On définie le FQCN du controller
      $controllerName = 'oquiz\Controllers\\' . $controllerName;
      // On instancie le controller et on lui envoi l'objet router en paramètre
      $controller = new $controllerName($this->router);
      // On récupère les paramètres donné dans l'url
      $params = $match['params'];
      // On appelle la méthode avec les paramètres
      $controller->$methodName($params);
    // Si pas de match trouvé
    } else {
        // On envois une réponse 404
        header("HTTP/1.0 404 Not Found");
        exit;
    }
  }

}
