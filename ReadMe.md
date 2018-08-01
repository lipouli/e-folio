# Objectif
L'objectif de l'application sera de faire une page web listant tous mes projets durant ma formation o'clock et plus.
Les composants de cette application devront avoir une description de la technologie appliqué.
Les projets devront pouvoir être ordonés technologiquement.

# Technologie
L'application tournera sous Node.js avec un server Express.js
On utilisera _yarn_ pour le gérer les packages.
L'application utilisera les librairie suivante:
  react-router pour les changement de page
  react-redux pour gérer le state
  emotion sera utilisé pour la mise en style des composants
  fontawesome-svg-core, free-solid-svg-icons, react-fontawesome pour les icons fontawsome

# Les pages
L'application devra comporter:

  - une barre de navigation permettant de trier et ordonner les projets a afficher.
  - Comporter une div d'info en absolut affichant les actions en arrière plan de redux.
  - La div devra être temporaire et disparaitra automatiquement après un certain temps.
  - L'application sera une SPA (single page application), elle de devra donc pas faire de changement de page même pour les projet ne comportant pas de composant react ( nottamment pour les pages fait en html css javascript développé en début de formation ).
  - Certain projet seront de plus susceptible d'être recoder avec react (nottamment les projets à la base en php).

# Arborescense du dossier src
Le dossier src comportera le core de l'application.
Les projet sera mis dans le dossier _projects_ dans le dossier _src_ avec une arborescence propre.

# Journal de bord
__30/07/2018__
  - Création de React-model début de projet.
  - Création du fichier ReadMe.md
  - installation express.js et création serveur dans _src/server_.
    - ligne de commande pour démarrer le serveur de dev : _node src/server/index.js_
  - Installation de emotion, react-emotion et babel-plugin-emotion

__31/07/2018__
  - Création du Navbar avec titre et menu filtrer
    - Création de l'animation hovered pour les éléments clickable avec _keyframes_ de _react-emotion_
    - Style du Navbar des éléments avec _styled_ de _react-emotion_
    
__01/08/20018__
  - installation fontawesome-svg-core, free-solid-svg-icons, react-fontawesome.
  - ajout du menu de navigation dans le Navbar et création de l'animation.