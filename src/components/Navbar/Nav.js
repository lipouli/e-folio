import styled from 'react-emotion';

import { primary } from '~/styles/color';

export default styled.nav`
  background-color: ${primary};
  color: white;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 5;
  width: 100vw;
`;
