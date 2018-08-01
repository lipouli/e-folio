import styled from 'react-emotion';

import { activable, hover } from '~/styles/color';
import hovered from '~/styles/animations/hovered';

export default styled.li`
  color: ${activable};
  transition: 1s;
  &:hover {
    color: ${hover};
    animation: ${hovered} 1s ease;
  }
`;
