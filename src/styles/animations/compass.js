import { keyframes } from 'react-emotion';

const compass = keyframes`
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

export default compass;
