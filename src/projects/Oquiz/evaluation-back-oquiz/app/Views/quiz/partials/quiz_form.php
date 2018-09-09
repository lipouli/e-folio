<?php
// partial pour générer le formulaire pour répondre au quiz
foreach($question->getShuffledProp() as $key => $prop) :
$responseId = "question{$question->getId()}response{$key}";
?>
  <li>
    <input type="radio" id="<?= $responseId ?>" name="<?= $question->getId(); ?>" value="<?= $prop ?>">
    <label for="<?= $responseId ?>"><?= $prop ?></label>
  </li>
<?php endforeach; ?>
