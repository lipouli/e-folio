<?php
// require de l'autoloader de composer
require __DIR__ . '/../vendor/autoload.php';

session_start();

// use de la classe Application
use oquiz\Application;

// On enregistre le base path dans une constante globale
define('ABS_BASE_PATH', __DIR__.'/../');

// instanciation de Application
$app = new Application();

// appel de la méthode run de Application
$app->run();
