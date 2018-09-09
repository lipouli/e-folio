<?php
$this->layout('layout');
$this->start('css');
?>
<link rel="stylesheet" href="<?= $basePath ?>/assets/css/home.css">
<?php $this->stop(); ?>
<div class="home-title">
  <h2>Bienvenue <?= $connectedUser->getFirstName() ?></h2>
  <p>Voici vos quizz :</p>
</div>

<?php
$this->insert('partials/quizzes_list', array(
  'quizzes' => $quizzes,
));
?>
