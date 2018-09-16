<?php $this->layout('layout'); ?>
<?php $this->start('css'); ?>
<link rel="stylesheet" href="<?= $basePath ?>/assets/css/form.css">
<?php $this->stop(); ?>

<form class="form" action="<?= $router->generate('user_signin_post'); ?>" method="post">
    <label for="email">Email : </label>
    <input type="text" name="email" id="email" value="">
    <label for="password">Mot de passe : </label>
    <input type="password" name="password" id="password" value="">
    <input type="submit" name="" value="Se Connecter">
</form>
<p>
    voici les utilisateurs enregistrés en base de donnée avec leur mot de passe:
</p>
<ul>
    <li>* philippe@oclock.io - quizoclock</li>
    <li>* chuck@oclock.io - quizoclock</li>
</ul>
<?php $this->start('javascript'); ?>
<script src="<?= $basePath ?>/assets/js/form.js " charset="utf-8"></script>
<?php $this->stop(); ?>
