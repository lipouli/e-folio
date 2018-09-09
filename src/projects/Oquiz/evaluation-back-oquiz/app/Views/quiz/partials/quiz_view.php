<?php
// partial pour générer la list des question pour visionage seulement
foreach($question->getShuffledProp() as $prop) : ?>
  <li><?= $prop ?></li>
<?php endforeach; ?>
