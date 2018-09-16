import { keyframes } from 'react-emotion';

const hovered = keyframes`
  15%
    {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
  30%
    {
      -webkit-transform: translateX(-3px);
      transform: translateX(-3px);
    }
  50%
    {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
  65%
    {
      -webkit-transform: translateX(-1px);
      transform: translateX(-1px);
    }
  80%
    {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
  100%
    {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
`;

export default hovered;
