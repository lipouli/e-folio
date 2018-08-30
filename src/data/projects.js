import {
  oclock,
  javascript,
  jquery,
  html,
  css,
} from '~/data/tags';
import MemoryDescription from '~/projects/Memory/Description';
import OquizDescription from '~/projects/Oquiz/Description';
import OblogDescription from '~/projects/Oblog/Description';

const projects = [
  {
    name: 'memory',
    slug: 'memory',
    date: new Date(2018, 3, 16),
    description: MemoryDescription,
    info: {
      description: 'évaluation javascript O\'clock',
      tag: [
        oclock,
        javascript,
        jquery,
        html,
        css,
      ],
    },
  },
  {
    name: 'oquiz',
    slug: 'oquiz',
    date: new Date(2018, 4, 23),
    description: OquizDescription,
    info: {
      description: 'évaluation back O\'clock',
      tag: [
        javascript,
        jquery,
        html,
        css,
      ],
    },
  },
  {
    name: 'oblog',
    slug: 'oblog',
    date: new Date(2018, 3, 16),
    description: OblogDescription,
    info: {
      description: 'évaluation html/css O\'clock',
      tag: [
        html,
        css,
      ],
    },
  },
];

export default projects;
