import styled from 'react-emotion';

import { hover } from '~/styles/color';

const Section = styled.section`
  border: 1px solid red;
  padding: 0.3rem;
  margin-bottom: 0.3rem;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    border: 1px solid ${hover};
  }
`;

export default Section;
