import styled from 'react-emotion';

import { hover } from '~/styles/color';

const ListFormation = styled.ul`
  li {
    margin-top: 0.7rem;
    p {
      margin: 0.5rem;
      font-size: 0.9rem;
      span {
        font-style: italic;
        font-size: 1rem;
        font-weight: bold;
        color: ${hover}
      }
    }
  }
`;

export default ListFormation;
