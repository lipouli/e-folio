import {
  faUser,
  faFolder,
  faEnvelope,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

const menuList = [
  {
    name: 'Moi',
    path: 'moi',
    icon: faUser,
  },
  {
    name: 'Réalisations',
    path: 'realisations',
    icon: faFolder,
  },
  {
    name: 'Contact',
    path: 'contact',
    icon: faEnvelope,
  },
  {
    name: 'Home',
    path: '',
    icon: faHome,
  },
];

export default menuList;
