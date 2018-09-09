<?php

namespace oquiz\Utils;

class User {
  // vérification si l'user est connecté en vérifiant l'existance de user dans session
  public static function isConnected() {
      return !empty($_SESSION['user']);
  }
  // récupération de l'user de la session si user connecté
  public static function getUser() {
    return (self::isConnected()) ? $_SESSION['user'] : false;
  }
  // insertion de l'user en session pour la connection
  public static function setUser($userModel) {
    if (is_object($userModel)) {
      $_SESSION['user'] = $userModel;
    }
  }
  // deconnection de l'user
  public static function logout() {
    session_destroy();
  }

}

 ?>
