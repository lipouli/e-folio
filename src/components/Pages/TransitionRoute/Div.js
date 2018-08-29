import styled from 'react-emotion';

import { activable, primary } from '~/styles/color';

const Div = styled.div`
  padding: 0.5rem;
  background-color: ${primary};
  color: white;
  min-height: 100%;
  .section {
    margin-bottom: 0.6rem;
    h2 {
      color: ${activable};
      font-size: 1.5rem;
      margin-bottom: 0.3rem;
      margin-bottom: 0.4rem;
    }
    p {
      padding-left: 0.5rem;
      margin-bottom: 0.3rem;
    }
    li {
      padding-left: 0.5rem;
      margin-bottom: 0.3rem;
    }
  }
`;

export default Div;
