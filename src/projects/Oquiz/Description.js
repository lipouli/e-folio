import React from 'react';

import Div from '~/projects/Styles/description';

const Description = () => (
  <Div>
    <p>Fait en php avec alto-router</p>
    <p>O'Quiz est une application simple de quiz.</p>
    <p>En arrivant sur la page d'accueil, les visiteurs voient la liste des quiz disponibles.</p>
    <p>Un lien leur permet également de se connecter.</p>
    <p>En cliquant sur le titre d'un quiz, on consulte le détail d'un quiz. Sur la page d'un quiz s'affichent les infos du quiz et la liste de questions.</p>
    <p>Les visiteurs non connectés peuvent seulement consulter la liste des questions, alors que les visiteurs connectés peuvent jouer (grâce à un formulaire).</p>
    <p>Lorsqu'un visiteur se connecte il est redirigé vers la page d'accueil (liste des quiz).</p>
    <p>Cliquer sur un quiz permet alors aux visiteurs connectés d'aller jouer:</p>
    <ul>
      <li>Toutes les questions sont listées sur la page.</li>
      <li>Pour chaque questions, 4 boutons radio permettent de choisir une des 4 réponses.</li>
      <li>En bas de la page un bouton permet de soumettre ses réponses et d'afficher son résultat. A l'affichage du résultat:</li>
      <li>le score total est affiché (nombre de bonnes réponses / nombre total de qustions)</li>
      <li>chaque question est colorée</li>
    </ul>
  </Div>
);

export default Description;
