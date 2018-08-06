import React from 'react';

import App from './Infos/App';

const InfoList = {
  app: <App />,
};

export const getData = tooltip => InfoList[tooltip] || 'Pas de description.';

export default InfoList;
