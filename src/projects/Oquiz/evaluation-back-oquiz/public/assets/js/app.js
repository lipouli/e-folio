var app = {

  init: function() {
    app.showActualPage();
  },
  // Méthode pour activer le lien de la page dans la nav
  showActualPage: function() {
    // on récupère tous les lien de la nav
    var $navLinkArray = $('nav a');
    // on vérifie pour chaque lien
    $navLinkArray.each(
      (index, link) => {
        // si il correspond à l'adresse actuelle de la page
        if(link.href == location) {
          // si oui on lui ajoute la classe active
          $(link).addClass('active');
        }
      }
    );
  }

};

$(app.init);
