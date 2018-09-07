var app = {
  // mode débugueur : affichage timer dans console et numéro d'image sur dos de cartet
  debugMode: false,
  cards: [],
  previousCard: null,
  timerInterval: null,
  timer: 0,
  nbCard: 0,
  maxTime: 0,
  nbCardRow: 0,
  levelSelected: null,
  level: {
    easy: {
      nbCard: 28,
      maxTime: 60,
      nbCardRow: 7
    },
    hard: {
      nbCard: 36,
      maxTime: 90,
      nbCardRow: 9
    }
  },
  scores: {
    easy: {
      'storage': 'memoryScoresEasy',
      'DOMId': '#scores-easy',
      'scores': []
    },
    hard: {
      'storage': 'memoryScoresHard',
      'DOMId': '#scores-hard',
      'scores': []
    },
  },

  init: function() {
    // on écoute le click sur les bouton level
    $('.menu-btn').on('click', app.menuSelection);
    // on met à jour les scores
    app.updateScores();
  },

  // mettre à jour le tableau des score
  updateScores: function() {
    // on récupère les scores
    app.checkScores();
    // on les affiche
    app.showScores();
  },

  // methode pour récuperer les scores
  checkScores: function() {
    for (var level in app.scores) {
      var levelData = app.scores[level];
      // on vérifie si les données existent
      if (!localStorage.getItem(levelData.storage)) {
        // si non on créer l'item
        localStorage.setItem(levelData.storage, '');
      }
      // on récupère les données en string
      var scoresString = localStorage.getItem(levelData.storage);
      // on déclare un tableau vide soit de valeur 999:
      var initialScores = ['999', '999', '999', '999', '999'];
      if (scoresString) {
        // si scoresString n'est pas vide alors on le récupère en tableau
        initialScores = scoresString.split('/');
      }
      levelData.scores = initialScores;
    }
  },

  // pour afficher les scores à l'écran
  showScores: function() {
    for(var level in app.scores) {
      // on récupère les données pour chaque niveau
      var levelData = app.scores[level];
      // on vide l'affichage
      $(levelData.DOMId).empty();
      // on ajoute les scores un par un
      levelData.scores.forEach( score => {
        // la valeur 999 correspond à un score vide
        var scoreText = (score === '999') ? '-' : score;
        // on ajoute à l'affichage du score
        $('<span>').addClass('score-item').text(scoreText).appendTo($(levelData.DOMId));
      });
    }
  },

  // on initialise les paramètres du jeu
  menuSelection: function() {
    // on cache le menu
    $('#menu').hide();
    // on récupère le niveau choisit
    var level = $(this).data('level');
    // on initialise les paramêtre de jeu
    app.levelSelected = level;
    app.nbCard = app.level[level].nbCard;
    app.maxTime = app.level[level].maxTime;
    app.nbCardRow = app.level[level].nbCardRow;
    // on initialise le jeu
    app.initGame();
  },

  // initialisation du jeu
  initGame: function() {
    // on affiche le plateau et on assigne le nombre de carte par ligne avec css grid
    $('#plateau').css({
      'grid-template-columns': `repeat(${app.nbCardRow}, auto)`,
      'visibility': 'visible'
    });
    // on paramètre le minuteur avec css grid
    $('#minuteur').css({
      'grid-template-columns': `repeat(${app.maxTime}, 1fr)`
    })
    // on initialise un jeu de carte
    var cards = app.initCardArray();
    // on shuffle le jeu de cartes et on le place dans app.cards
    app.cards = app.shuffleDeck(cards);
    // on initialise le plateau de jeux
    app.initBoard(app.cards);
    // on écoute le click sur les cartes
    app.activateClick($('.card'));
    // démarage du minuteur
    app.timerInterval = setInterval(app.updateTimer, 1000);
  },

  // pour créer un jeu de carte
  initCardArray: function() {
    // récupération du nombre de cartes
    nbCard = app.nbCard;
    // création d'un array pour contenir les cartes
    var cardArray = [];
    // on défini un index initial pour les sprite. ici -1 car l'index sera incrémenté dès le début de la boucle plus basse.
    var spriteIndex = -1;
    // on ajoute les cartes
    for(var card = 0; card < nbCard; card++) {
      // on attribut l'index de l'image de fond par paire de carte. Si l'index de la carte est impaire alors il aura la même image que la carte précédente
      spriteIndex += (card % 2 != 0) ? 0 : 1;
      // creation des éléments enfant et on leur attribut des classes css
      var divCache = $('<div>').addClass('cache');
      if (app.debugMode) divCache.text(spriteIndex);
      var divImage = $('<div>')
                      .addClass('image')
                      .css({
                        'background-image': 'url(../images/cards.png)',
                        'background-position' : `0 -${spriteIndex * 100}px`
                      });
      // création de l'élément div carte et ajout des enfants
      var divCard = $('<div>')
                      .addClass('card')
                      .addClass('hidden')
                      .append(divCache)
                      .append(divImage);
      // ajout de la carte dans l'array
      cardArray.push(divCard);

    };
    // on retourne l'array de carte
    return cardArray;
  },

  // on ajoute les cartes sur le plateau avec cette méthode
  initBoard: function(cardsArray) {
    // on récupère le DOM du plateau de jeu par son id
    var gameBoard = $('#plateau');
    // et pour chaque carte dans l'array
    cardsArray.forEach( card => {
      // on l'ajoute sur le plateau
      gameBoard.append(card);
    })
  },

  // pour mélanger le jeu de carte
  shuffleDeck: function(cardsArray) {
    // on inverse la place de la dernière carte (indexCard) avec une autre carte aléatoire (randomIndexCard) puis on inverse la carte avant la dernière carte avec une autre carte etc... jusqu'à la première carte
    for (let indexCard = cardsArray.length - 1; indexCard > 0; indexCard-- ) {
      // la carte aléatoire
      const randomIndexCard = Math.floor(Math.random() * (indexCard + 1));
      // inversement de place des cartes
      [cardsArray[indexCard], cardsArray[randomIndexCard]] = [cardsArray[randomIndexCard], cardsArray[indexCard]];
    }
    return cardsArray;
  },

  // méthode pour activer le click du ou des cartes
  activateClick: function(card) {
    card.on('click', app.prepareFlip);
  },

  // methode pour désactiver les click d'une ou plusieur carte
  desactivateClick: function(card) {
    card.off('click');
  },

  // on prépare le flip de la carte
  prepareFlip: function() {
    // on récupère la carte
    card = $(this);
    // flip de la carte
    app.flipCard(card);
    // on désactive le click
    app.desactivateClick(card)
    // on vérifie si une carte a déjà été retourné
    if (app.previousCard) {
      // si oui on vérifie la précédente carte avec l'actuelle
      app.checkCard(card);
    } else {
      // si non on enregistre la carte
      app.previousCard = card;
    }
  },

  // method pour retourner les carte
  flipCard: function(card) {
    // a chaque click on toggle la classe hidden sur tout les élément enfant de la carte
    card.toggleClass('hidden');
  },

  // vérification des carte
  checkCard: function(currentCard) {
    // on récupère l'image de la carte actuelle
    var currentImage = currentCard.children('.image').css('background-position');
    // on récupère l'image de la précédete carte
    var previousImage = app.previousCard.children('.image').css('background-position');
    // on vérifie si elle sont identique
    if (currentImage !== previousImage) {
      // si non on freeze le plateau en récupérant toute les cartes encore caché
      var faceDownCard = $('.hidden');
      // et en désactivant l'écouteur du click de ces dernier
      app.desactivateClick(faceDownCard);
      // après une seconde on remet l'écoute
      setTimeout(() => {
        // on réactive les click
        app.activateClick(faceDownCard.add(currentCard).add(app.previousCard))
        // on retourne les carte
        app.flipCard(app.previousCard.add(currentCard));
        // on redéfinie la carte précédente à null
        app.previousCard = null;
      }, 1000);
    } else {
      // si c'est bon on redéfinie juste la carte précédente à null
      app.previousCard = null;
      // et on vérifie combien de carte il reste
      app.checkGame();
    }
  },

  // vérification du nombre de carte restant après une bonne paire
  checkGame: function() {
    var nbCardsLeft = $('.hidden').length;
    // si il ne reste plus de carte
    if (nbCardsLeft === 0) {
      clearInterval(app.timerInterval);
      // on met un interval pour laisser le temps a la carte de tourner
      setTimeout(() => {
        alert('Félicitation vous avez gagné ! Votre score: ' + app.timer + ' sec');
        app.addScore(app.timer);
        // on met fin au jeu
        app.endGame();
      }, 20);
    }
  },

  // on incrément le timer toute les secondes
  updateTimer: function() {
    app.timer++;
    // on affiche dans le minuteur
    if (app.debugMode) console.log('timer :', app.timer);
    app.moveTimer();
  },

  // affichage du minuteur
  moveTimer: function() {
    // on récupère l'élément par l'id
    var timer = $('#minuteur');
    // et on ajout une div
    $('<div>').addClass('minuteur-item').appendTo(timer);
    // on vérifie le timer
    app.checkTimer();
  },

  // on vérifie si le temps restant est écoulé
  checkTimer: function() {
    if (app.timer === app.maxTime) {
      // on stop le minuteur
      clearInterval(app.timerInterval);
      // on met un delai à l'affichage du message pour laisser le temps à la barre d'ateindre 100%
      setTimeout(() => {
        alert('Temps écoulé ! Vous avez perdu');
        // on stop le jeux
        app.endGame();
      }, 20);
    }
  },

  // ici on ajoute le score
  addScore: function(time) {
    // on récupère le niveau du jeu
    var level = app.levelSelected;
    // on récupère les données du niveau
    var levelData = app.scores[level];
    // on refait le tableau des scores avec le nouveau record
    var newScoreArray = levelData.scores.map(score => {
        var newScore = score;
        // si le nouveau temps et plus petit que le temps inscrit alors on le remplace et on décale tout le tableau
        if (score > time) {
          newScore = time;
          time = score;
        }
        return newScore;
      }
    );
    // on transforme notre tableau en string
    var scoresString = newScoreArray.join('/')
    // on l'enregistre dans le localStorage
    localStorage.setItem(levelData.storage, scoresString);
    // on réactualise l'affichage du tableau des scores
    app.updateScores();
  },

  // arrêt du jeux
  endGame: function() {
    // on cache le plateau et on le vide
    $('#plateau').empty().css({
      'visibility': 'hidden'
    });
    // on vide le minuteur
    $('#minuteur').empty();
    app.timer = 0;
    // on réinitialise la valeur de app.previousCard dans le cas où le joueur n'aurais pas encore retourné de 2em carte avant la fin du minuteur
    app.previousCard = null;
    // on affiche le menu
    $('#menu').show();
  }

};

$(app.init);
