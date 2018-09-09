<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>O'Quiz</title>
  <link rel="stylesheet" href="<?= $basePath ?>/assets/css/normalize.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.11/css/all.css" integrity="sha384-p2jx59pefphTFIpeqCcISO9MdVfIm4pNnsL08A6v5vaQc4owkQqxMV8kg4Yvhaw/" crossorigin="anonymous">
  <link rel="stylesheet" href="<?= $basePath ?>/assets/css/app.css">
  <?= $this->section('css') ?>
</head>

<body>

  <header class="header">
    <h1 class="header-title">O'Quiz</h1>
    <?= $this->insert('partials/nav') ?>
  </header>

  <main>
    <?= $this->section('content') ?>
  </main>

  <footer>
    <small>&copy; Copyright 2017 - O'clock</small>
  </footer>

  <script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
  <script src="<?= $basePath ?>/assets/js/app.js" charset="utf-8"></script>
  <?= $this->section('javascript') ?>
</body>
</html>
