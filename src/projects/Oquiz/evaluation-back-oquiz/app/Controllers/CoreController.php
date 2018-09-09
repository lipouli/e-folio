<?php

namespace oquiz\Controllers;

use League\Plates\Engine;
use oquiz\Utils\User;

abstract class CoreController {

  protected $router;
  protected $templates;

  public function __construct($router) {
    $this->router = $router;
    // création d'une instance de plates
    $this->templates = new Engine(ABS_BASE_PATH.'/app/Views');
    // on fourni à plates le router pour la génération des url
    $this->templates->addData(array(
      'router' => $router,
      'basePath' => '/oquiz',
      'connectedUser' => User::getUser(),
    ));
  }

  // Methode pour renvoyer des données en format json
  protected function sendJson($response) {
    header('Content-Type: application/json');
    echo json_encode($response, JSON_PRETTY_PRINT);
    exit;
  }
  // Méthode pour rediriger vers un url
  protected function redirect($url) {
    header('Location: ' . $url);
    exit;
  }
  // Méthode pour redirigé avec une route généré
  protected function redirectToRoute($routeName, $params=array()) {
    $this->redirect($this->router->generate($routeName, $params));
  }


  protected function sendHttpError($code, $source='') {
    if ($code == 403) {
        header("HTTP/1.0 403 Forbidden");
    }
    if ($code == 404) {
        header('HTTP/1.0 404 Not Found');
    }
    echo $source;
    exit;
  }

}
