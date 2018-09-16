import React from 'react';

import Div from '~/projects/Styles/description';

const Description = () => (
  <Div>
    <p>Le but est de coder un mini-jeu en HTML / CSS / JS.</p>
    <p>Il s’agit du jeu “memory” :</p>
    <ul>
      <li>Des cartes sont disposées face cachée à l'écran.</li>
      <li>Le joueur doit cliquer sur deux cartes. Si celles-ci sont identiques, la paire est validée. Sinon, les cartes sont retournées face cachée, et le joueur doit sélectionner une nouvelle paire de cartes.</li>
      <li>Le joueur gagne s'il arrive à découvrir toutes les paires avant la fin du temps imparti.</li>
    </ul>
  </Div>
);

export default Description;
