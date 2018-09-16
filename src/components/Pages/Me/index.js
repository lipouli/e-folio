import React from 'react';

import LinkExt from '~/styles/projects/LinkExt';
import Ul from './Ul';

const Me = () => (
  <React.Fragment>
    <div className="section">
      <h2>A propos de moi</h2>
      <p>Né le 29 février 1984 (ce qui me fait 34 années le jour où j'écris cette ligne). Père d'une adorable petite fille et marié par la même occasion.</p>
      <p>Je me suis mis très tôt à la programmation, mais ce n'est qu'après la naissance de ma fille que l'idée d'en faire mon métier m'est venue.</p>
      <p>Évidemment un passionné de technologie, mais surtout je ne peux m’empêcher de fourrer mon nez partout où un problème se présente (oui j'adore les bug). Je m’intéresse à tout ce qui est du domaine du web, aussi bien front que back.</p>
    </div>
    <div className="section">
      <h2>Formation</h2>
      <Ul>
        <li>
          2018 - Développeur web et web mobile
          <p>Formation télé-présentiel chez <LinkExt href="https://oclock.io/">O'clock</LinkExt> de 700h sur 5 mois</p>
          <p><span className="formation-title">3 mois de socle</span> : html/css/javascript/php</p>
          <p><span className="formation-title">1 mois de spécialisation</span> : Spécialité choisie : React / javascript</p>
          <p><span className="formation-title">1 mois de projet</span>: Click and send</p>
          <p><span className="formation-title">Certification de fin de formation</span>: titre Développeur web et web mobile, Niveau III (bac +2) en cours</p>
          <p><span className="formation-title">Score <LinkExt href="https://www.opquast.com/">Opquast</LinkExt></span>: 925/1000 (niveau expert)</p>
        </li>
        <li>
          2017 - Auto-didacte dans le domaine du développement web: html, css, js ,php, symfony, react, mysql, node.
        </li>
        <li>
          2009 - Master LLCE spécialité Chinois
        </li>
        <li>
          2008 - Licence LLCE spécialité Chinois
        </li>
        <li>
          2004 - DEUG MIAS
        </li>
      </Ul>
    </div>
    <div className="section">
      <h2>Expérience</h2>
      <h3>2018 - Projet Clickn'Send(OpenSource)</h3>
      <p>Pour conclure la formation chez O'clock les étudiants se sont divisé en plusieurs groupe afin d'entamer des projets.</p>
      <p>Notre groupe, comprenant 2 étudiants spécialisés coté back (symfony) et 2 étudiants coté front (React) ont eu la charge de développer une application pour facilité la gestion des factures des freelances.</p>
      <p>Je me suis occupée de la conception de l'architecture du front, du mariage entre les technologie react/symfony, des appels ajax.</p>
    </div>
  </React.Fragment>
);

export default Me;
