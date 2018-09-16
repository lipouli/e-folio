<?php
$this->layout('layout');
$this->start('css');
?>
<link rel="stylesheet" href="<?= $basePath ?>/assets/css/home.css">
<?php $this->stop(); ?>

<div class="home-title">
  <h2>Bienvenue sur O'Quiz</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque numquam, veniam. Doloribus hic maxime iste recusandae voluptatem omnis! Perspiciatis expedita totam tempore. Consequuntur voluptas, quasi velit distinctio excepturi mollitia. Est sunt impedit natus veniam sit. Quae sed quidem nam dignissimos perspiciatis illum reprehenderit eos quisquam, est maiores sit, magnam repellendus.</p>
</div>

<?php
$this->insert('partials/quizzes_list', array(
  'quizzes' => $quizzes,
))
?>
