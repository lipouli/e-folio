var quiz = {

  init: function() {
    // écoute sur le submit du formulaire
    $('form').on('submit', quiz.submitHandler);
  },

  submitHandler: async function(e) {
    // on enlève l'écoute du formulaire
    $('form').off('submit');
    // on change le style du bouton submit
    $('input[type=submit]').val('Rejouer').addClass('rejouer');
    // on écoute le submit pour le rechargement de la page
    $('form').on('submit', quiz.reloadPage);
    e.preventDefault();
    // on récupère les données du formulaire
    var formData = $('form').serialize();
    // page d'envois du formualaire se faisant sur la même page
    var url = '#';
    // on récupère le donnée que nous renvois le serveur
    var responseData = await quiz.ajaxPost(url, formData);
    // on affiche la correction
    quiz.showCorrection(responseData);
  },
  // méthode pour recharger la page
  reloadPage: function(e) {
    e.preventDefault();
    location.reload();
  },
  // methode pour afficher la correction
  showCorrection: function(responses) {
    // on récupère le score du joueur qui se trouve à l'index 0 du tableau renvoyé par le server
    var score = responses.splice(0, 1)[0];
    // on fait apparaitre la div de score
    $('.score').removeClass('hidden');
    // on affiche le score
    $('.score p').text(`Votre score: ${score.correct}/${score.total}`);
    // on vérifie les résultats de chaque question répondu
    responses.forEach(
      response => {
        // l'élément DOM de la div question
        var $questionDOM = $(`#question${response.id}`);
        // le header contenant le titre de la question
        var $questionHeaderDOM = $questionDOM.children('.question-card-header');
        // la réponse du joueur
        var userResponse = response.response;
        // si la réponse est correct ou pas
        var isCorrect = response.correction.isCorrect;
        // réupération de l'anecdote
        var anecdote = response.correction.anecdote;
        // récupération du lien wiki
        var wiki = response.correction.wiki;
        // attribution de class selon la bonne ou mauvaise réponse du joueur
        var correctionCssClass = (isCorrect) ? 'correct' : 'not-correct';
        $questionHeaderDOM.addClass(`${correctionCssClass}`);
        // affichage de l'anecdote et du lien wiki avec comme paramètre DOM de la div question, anecdote , wiki
        quiz.showAnecdote($questionDOM, anecdote, wiki);
      }
    );
  },
  // méthode pour afficher l'anecdote et lien wiki
  showAnecdote: function($dom, anecdote, wiki) {
    // création du div contenant les info
    var $infoDiv = $('<div>').addClass('question-info');
    // création du paragraphe d'anecdote
    var $anecdoteP = $('<p>').text(anecdote);
    // création du lien wiki
    var $wikiLink = $('<a>').text(`Wikipedia(${wiki})`)
      .addClass('question-info-wiki')
      .attr('href', `https://fr.wikipedia.org/wiki/${wiki}`);
      // on insére le tout
    $infoDiv.append($anecdoteP, $wikiLink).appendTo($dom);
  },
  // méthode d'appelle ajax POST
  ajaxPost: function(url, data) {
    return new Promise((resolve, reject) => {
      $.post(url, data, null, 'json')
        .done(
          responseData => resolve(responseData)
        )
        .fail(
          failData => reject(failData)
        );
    })
  }
};

$(quiz.init);
