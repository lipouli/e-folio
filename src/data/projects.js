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
import ClickDescription from '~/projects/Click/Description';
import OblogComponent from '~/projects/Oblog';
import MemoryComponent from '~/projects/Memory';
import OquizComponent from '~/projects/Oquiz';
import ClickComponent from '~/projects/Click';

const projects = [
  {
    name: 'memory',
    slug: 'memory',
    date: new Date(2018, 3, 16),
    description: MemoryDescription,
    Component: MemoryComponent,
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
    Component: OquizComponent,
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
    Component: OblogComponent,
    info: {
      description: 'évaluation html/css O\'clock',
      tag: [
        html,
        css,
      ],
    },
  },
  {
    name: 'clickNsend',
    slug: 'click',
    date: new Date(2018, 6, 17),
    description: ClickDescription,
    Component: ClickComponent,
    info: {
      description: 'projet de fin de formation',
    },
  },
];

export default projects;
