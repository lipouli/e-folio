import React from 'react';

import App from './Infos/App';
import Header from './Infos/Header';

const InfoList = {
  app: <App />,
  header: <Header />,
};

export const getData = tooltip => InfoList[tooltip] || 'Pas de description.';

export default InfoList;
