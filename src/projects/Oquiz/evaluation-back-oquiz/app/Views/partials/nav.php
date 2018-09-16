<!-- nav du header selon que l'utilisateur soit conecté ou non -->
<nav class="header-nav">
<?php if($connectedUser): ?>

  <li>
    Bonjour <span class="bold"><?= $connectedUser->getFirstName() ?></span>
  </li>
  <li>
    <a class="hover" href="<?= $router->generate('main_home') ?>"><i class="fas fa-home"></i>Accueil</a>
  </li>
  <li>
    <a class="hover" href="<?= $router->generate('user_profile') ?>"><i class="fas fa-user"></i>Mon Compte</a>
  </li>
  <li>
    <a class="hover" href="<?=$router->generate('quiz_create') ?>"><i class="fas fa-plus-square"></i>Créer quiz</a>
  </li>
  <li>
    <a class="hover" href="/api/utils/oquiz/logout"><i class="fas fa-sign-out-alt"></i>Deconnexion</a>
  </li>

<?php else: ?>

  <li>
    <a class="hover" href="<?= $router->generate('main_home') ?>">Accueil</a>
  </li>
  <li>
    <a class="hover" href="<?= $router->generate('user_signin') ?>"><i class="fas fa-sign-in-alt"></i>Connection</a>
  </li>
  <li>
    <a class="hover"><i class="far fa-edit"></i>Inscription</a>
  </li>

<?php endif; ?>

</nav>
