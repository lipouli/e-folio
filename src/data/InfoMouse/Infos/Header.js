import React from 'react';

import { Cite } from './styles';

const Header = () => (
  <div>
    <p>Animation fait en pure css avec keyframes</p>
    <p>Menu circulaire fait grace à : </p>
    <ul>
      <li>
        <Cite>D3</Cite> pour la création des arcs et pour le calcul de leur centre afin d'y ajouter un label.
      </li>
      <li><Cite>Greensock</Cite> pour les animations.</li>
    </ul>
    <p>Le menu circulaire est dynamique</p>
  </div>
);

export default Header;
