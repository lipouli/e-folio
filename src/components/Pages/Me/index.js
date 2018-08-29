import React from 'react';

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
      <ul>
        <li>
          2004 - DEUG MIAS
        </li>
        <li>
          2008 - Licence LLCE spécialité Chinois
        </li>
        <li>
          2009 - Master LLCE spécialité Chinois
        </li>
        <li>
          2017 - Auto-didacte dans le domaine du développement web: html, css, js ,php, symfony, react, mysql, node.
        </li>
        <li>
          2018 - Formation développeur web avec l'école O'clock, spécialité front-end avec la librairie React.
        </li>
      </ul>
    </div>
    <div className="section">
      <h2>Expérience</h2>
      <h3>2018 - Projet Clickn'Send(OpenSource)</h3>
      <p>Pour conclure la formation chez O'clock les étudiants se sont divisé en plusieur groupe afin d'entamer des projets.</p>
      <p>Notre groupe, comprenant 2 étudiants spécialisés coté back (symfony) et 2 étudiants coté front (React) ont eu la charge de développer une application pour facilité la gestion des factures des freelances.</p>
      <p>Je me suis occupée de la conception de l'architecture du front, du mariage entre les technologie react/symfony, des appels ajax.</p>
    </div>
  </React.Fragment>
);

export default Me;
