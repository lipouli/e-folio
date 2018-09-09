# Feedback du prof

La plupart des commentaires ci-dessous sont des pistes pour améliorer encore la qualité de ton code ; à quelques exceptions près ça ne veut pas dire que ton code est faux dans l'absolu, juste que tu peux toujours optimiser, encore et encore. C'est ce qui différencie un bon ~~chasseur~~ développeur, d'un développeur !

## Etape 1 : La page d'accueil

### Enoncé

- Créer un model Quiz.php et ses propriétés, getters/setters
- Créer une méthode de récupération de tous les quizzes
- Mettre en place une route pour la home avec un controller adapté
- Template de liste des quizzes ...réutilisable sur la page "mon compte"

### Notions

- [x] Setup : config, altorouter, Plates, namespace
- [x] Route / et controller indexAction
- [x] Model pour le quiz
- [x] Méthode findAll
- [x] Template home/liste de quiz

### Commentaires

- Pour les bonnes pratiques, l'idéal est de mettre le mot clef action dans la déclaration des noms de méthodes des controllers, car dans la plupart des framework celui ci est obligatoire (`IndexAction` par exemple)
- Super les méthodes centralisées dans le CoreModel :+1:
- Bien, le `join` pour récupérer les informations de l'auteur en même temps que les quizzes :+1: Moins il y a de requêtes, mieux c'est !
- C'est bien d'avoir pensé à mettre le nom de la table dans une constante.
- Nickel :thumbsup:





## Etape 2 : La consultation d'un quizz

### Enoncé

- Créer la page qui affiche le détail d'un quiz à partir de son id
- Créer un model pour les questions (propriétés, setters, getters, méthode de récupération des questions d'un quiz)
- Les titres de quizz renvoient vers la page détail nouvellement créée
- Les 4 propositions doivent être mélangées

### Notions

- [x] Route `/quiz/[id]` et controller
- [x] Méthode pour trouver le quiz demandé
- [x] Model pour les questions
- [x] Méthode pour récupérer les questions d'un quiz
- [x] Shuffle sur les réponses
- [x] Template détail de quiz
- [x] Liens de la page liste vers la page détail

### Commentaires

- Le `join` pour récupérer les niveaux en même temps que les questions = au top :rocket:
- Puisque tu as mis la table "questions" en constante, autant le faire aussi pour la table "levels" :wink :
- Bien le shuffle !
- Si ça t'intéresse, tu peux même aller encore plus loin dans l'automatisation : plutôt que d'appeler ->prop1 puis ->prop2 etc… tu peux faire un nom de fonction dynamique et l'appeler dans une boucle for ! :boom: Jettes donc un oeil à [la doc](http://php.net/manual/fr/functions.variable-functions.php) (mais attention aux nœuds de cerveau...)
- Pour la gestion des couleurs associées à chaque niveau, il aurait été préférable de juste mettre une classe différente sur chacun (automatisée, pas en dur - par ex, le nom du label en minuscule, débarassé de ses caractères spéciaux), puis de gérer le code couleur correspondant à la classe dans le css. C'est histoire de mettre au même endroit tout ce qui concerne la mise en page. Ce sera surtout important dans le cadre d’un travail en collaboration – avec, par exemple, un intégrateur.
- Sinon nickel :thumbsup:








## Etape 3 : Login-logout

### Enoncé

- Les utilisateurs présents en base de données peuvent se connecter au site
- Un utilisateur ne peut pas se connecter avec des identifiants erronés
- Rediriger en page d'accueil un utilisateur à son authentification
- Différencier l'affichage de l'utilisateur connecté

### Notions

- [x] Routes login/logout et controller
- [x] Redirections
- [x] Template et formulaire de la page de login
- [x] Modèle User
- [x] Gestion de sessions

### Commentaires

- Nickel :thumbsup:





## Etape 4 : Le système de quizz

### Enoncé

- Changer le template du quizz pour les connectés, sans changement de la route
- Créer un formulaire de quiz
- Vérifier la validité des réponses et y associer un code couleur
- Afficher l'anecdote + lien Wikipedia correspondant aux questions répondues

### Notions

- [x] Même route, affichage différent pour les loggués
- [x] Template et formulaire de quiz
- [x] Route `/quiz/[id]` en POST
- [x] Méthode de traitement du résultat
- [x] Visualisation du résultat + informations complémentaires

### Commentaires

- Tu es allé encore plus loin que l’attendu dans ta gestion de la différence du template quiz entre utilisateur connecté et anonyme. C’est très, très bien !







## Général

- Qualité du code
  - [x] Indentation et lisibilité du code
  - [x] Présence de commentaires dans le code
  - [x] Intégration correcte
- Professionnalisme
  - [x] Respect du CDC
  - [x] Livraison dans les temps
  - [x] Nomenclature des commits
  - [ ] Commentaires en anglais (bonus)


### Pistes de révisions

- `¯\_(ツ)_/¯`


### Commentaires



- Dommage qu’on puisse créer un quiz mais pas ses questions (je plaisante, c’est déjà super d’avoir amorcé les bonus !!!) :bowtie:
- Un peu plus d'aération dans la présentation, comme des espaces entre chaque méthode, serait bienvenue.
- :sparkles::sparkles::sparkles: Excellente évaluation, GG :sparkles::sparkles::sparkles:

Je ne trouve vraiment rien de plus à ajouter, c'est une des meilleures evals que j'ai vu passer. Toutes mes félicitations !!!
