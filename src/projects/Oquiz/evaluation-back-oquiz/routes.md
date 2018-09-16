# Routes

| titre | Method  | Url | Controller+méthode |  Description |
|--|--|--|--|--|
| Home    | GET       | /             | MainController#home     | La page d'accueil d'oquiz |
| Quiz    | GET/POST  | /quiz/[i:id]  | QuizController#quiz     | Page d'un quiz  |
| Signup  | GET/POST  | /signup       | UserController#signup   | inscription |
| Signin  | GET/POST  | /signin       | UserController#signin   | Connection  |
| Compte  | GET       | /compte       | UserController#profile  | profil de l'user |
