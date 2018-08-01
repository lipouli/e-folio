import styled from 'react-emotion';

import compass from '~/styles/animations/compass';
import { activable, hover } from '~/styles/color';

export default styled.li`
  color: ${activable};
  animation: ${compass} 3s infinite linear;
  transition: 1s;
  &:hover {
    animation-play-state: paused;
    color: ${hover};
  }
`;
