<!-- partial pour générer la liste des quiz -->
<div class="quizzes-list">
  <?php foreach($quizzes as $quiz) : ?>
  <div class="quiz-card">
    <h3><a href="<?= $router->generate('quiz_quiz', array('id' => $quiz->getId())) ?>"><?= $quiz->getTitle() ?></a></h3>
    <h4><?= $quiz->getDescription() ?></h4>
    <cite>by <?= $quiz->first_name . ' ' . $quiz->last_name?></cite>
  </div>
<?php endforeach; ?>
</div>
