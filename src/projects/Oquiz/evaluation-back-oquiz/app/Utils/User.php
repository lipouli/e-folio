<?php

namespace oquiz\Utils;

class User {
  // vérification si l'user est connecté en vérifiant l'existance de user dans session
  public static function isConnected() {
      return !empty($_SERVER['user']);
  }
  // récupération de l'user de la session si user connecté
  public static function getUser() {
    return (self::isConnected()) ? unserialize(json_decode($_SERVER['user'])) : false;
  }
  // insertion de l'user en session pour la connection
  public static function setUser($userModel) {
    if (is_object($userModel)) {
      $_SERVER['user'] = json_encode(serialize($userModel));
    }
  }
  // deconnection de l'user
  public static function logout() {
    session_destroy();
  }

}

 ?>
