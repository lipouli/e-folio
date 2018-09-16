<?php
$this->layout('layout');
$this->start('css');
?>
<link rel="stylesheet" href="<?= $basePath ?>/assets/css/form.css">
<?php $this->stop(); ?>
<h2>Création quiz : </h2>

<form class="form" action="" method="post">
  <label for="title">Titre :</label>
  <input type="text" name="title" id="title" value="">
  <label for="description">Description :</label>
  <textarea name="description" id="description"></textarea>
  <input type="submit" name="" value="créer">
</form>

<?php $this->start('javascript'); ?>
<script src="<?= $basePath ?>/assets/js/form.js " charset="utf-8"></script>
<?php $this->stop(); ?>
