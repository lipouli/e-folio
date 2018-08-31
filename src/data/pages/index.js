import Me from '~/components/Pages/Me';
import Realisations from '~/containers/Pages/Realisations';
import Contact from '~/components/Pages/Contact';

const pagesList = [
  {
    path: '/moi',
    component: Me,
    name: 'moi',
  },
  {
    path: '/realisations',
    component: Realisations,
    name: 'realisations',
  },
  {
    path: '/contact',
    component: Contact,
    name: 'contact',
  },
];

export default pagesList;
