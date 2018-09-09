var form = {
  // écoute sur le submit du formulaire
  init: function() {
    $('form').on('submit', form.submitHandler);
  },
  // submit handler
  submitHandler: async function(e) {
    e.preventDefault();
    // récupération des données du formulaire
    let dataJson = $(this).serialize();
    // Récupération du lien ou doit etre envoyer le formulaire
    let url = $(this).attr('action');
    // récupération des données renvoyées par le server
    let response = await form.ajaxPost(url, dataJson);
    if (response.success) {
      // redirection en cas de success
      window.location.href = response.url;
    } else {
      // affichage des erreurs
      form.showError(response.errorList);
    }
  },
  // création d'une div ur afficher les erreur
  createDivInfo: function() {
    $infoDiv = $('<div>').addClass('info').appendTo('main');
    return $infoDiv;
  },
  // affichage des erreurs
  showError: function(errors) {
    //  faire disparaitre les anciens message avec css (animation)
    $('.info').addClass('trash');
    // supprimer les anciens message du DOM
    window.setTimeout(form.removePrevInfo, 700,  $('.info'));
    // créer une nouvelle div pour les erreurs
    $infoDiv = form.createDivInfo();
    // insérer les messages dans la div
    errors.forEach(
      error => {
        $('<span>')
          .addClass('error-item')
          .text(error)
          .appendTo($infoDiv);
      }
    )
  },
  // suppirmer les anciennes div
  removePrevInfo: function($infoDiv) {
    $infoDiv.remove();
  },
  // methode ajax en post pour récupérer les informations sur la soumission du formulaire
  ajaxPost: function(url, data) {
    return new Promise( (resolve, reject) => {
      $.post(url, data, null ,'json')
        .done(
          returnData => {
            resolve(returnData)
          }
        )
        .fail(
          returnResponse => {
            reject(returnResponse)
          }
        )
    });
  }
}

$(form.init);
