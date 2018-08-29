import {
  oclock,
  javascript,
  jquery,
  html,
  css,
} from '~/data/tags';

const projects = [
  {
    name: 'memory',
    slug: 'memory',
    date: new Date(2018, 3, 16),
    info: {
      description: 'évaluation javascript',
      tag: [
        oclock,
        javascript,
        jquery,
        html,
        css,
      ],
    },
  },
];

export default projects;
