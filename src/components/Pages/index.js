import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import queryString from 'query-string';

import pagesList from '~/data/pages';
import Project from '~/containers/Project';
import TransitionRoute from './TransitionRoute';
import Div from './Div';

class Pages extends React.Component {
  getPages = () => {
    const { location: { pathname } } = this.props;
    const pages = pagesList.filter(page => (
      pathname === '/' ? true :
        page.path === pathname
    ));
    return pages.map(page => (
      <TransitionRoute key={page.name} component={page.component} />
    ));
  }

  render() {
    const parsedQueryString = queryString.parse(this.props.location.search);
    const isProjects = parsedQueryString.projects;
    return (
      <React.Fragment>
        <TransitionGroup
          component={Div}
          appear
          enter
          exit
        >
          {this.getPages()}
        </TransitionGroup>
        { isProjects && <Project project={isProjects} /> }
      </React.Fragment>
    );
  }
}

Pages.propTypes = {
  location: PropTypes.object.isRequired,
};


export default Pages;
