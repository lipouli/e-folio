<?php
$this->layout('layout');
// balise div ou form selon que l'user est connecté ou non
$container = ($connectedUser) ? 'form' : 'div';
// partial a insérer selon que l'user est connecté ou non
$partial = ($connectedUser) ? 'quiz_form' : 'quiz_view';
// css pour la page quiz
$this->start('css');
?>
<link rel="stylesheet" href="<?= $basePath ?>/assets/css/quiz.css">
<?php $this->stop(); ?>

<div class="quiz-title">
  <h2><?= $quiz->getTitle() ?> <span class="quiz-count-question"><?= count($questions) ?> questions</span></h2>
  <h3><?= $quiz->getDescription() ?></h3>
  <cite>by <?= $quiz->first_name . " " . $quiz->last_name ?></cite>
</div>
<!-- div pour le score caché initialement -->
<div class="score hidden">
  <p></p>
  <a href="<?= $router->generate('quiz_quiz', array('id' => $quiz->getId())) ?>">Rejouer</a>
</div>

<<?= $container ?> class="questions-container">
  <?php foreach($questions as $question) : ?>
    <div class="question-card" id="question<?= $question->getId() ?>">
      <div class="question-card-header">
        <div class="question-level" style="background: <?= $levelColor[$question->levelName] ?>"><?= $question->levelName ?></div>
        <h4><?= $question->getQuestion() ?></h4>
      </div>
      <ol class="<?= $connectedUser ? 'no-style-list' : '' ?>">
        <?= $this->insert('quiz/partials/'.$partial, array('question' => $question)) ?>
      </ol>
    </div>
  <?php endforeach; ?>
  <?php if($connectedUser): ?>
    <input type="submit" name="" value="ok" class="form-submit">
  <?php endif; ?>
</<?= $container ?>>

<?php
// javascript pour les réponse du quiz si user connecté
if($connectedUser):
$this->start('javascript');
?>
  <script src="<?= $basePath ?>/assets/js/quiz.js" charset="utf-8"></script>
<?php
$this->stop();
endif;
?>
