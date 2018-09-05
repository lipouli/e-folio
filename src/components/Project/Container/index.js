import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '~/containers/Project/Container/CloseIcon';
import Div from './Div';
import Content from './Content';
import FlexDiv from './FlexDiv';

const ContainerProject = ({ children }) => (
  <Div>
    <CloseIcon />
    <FlexDiv>
      <Content>
        {children}
      </Content>
    </FlexDiv>
  </Div>
);

ContainerProject.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ContainerProject;
