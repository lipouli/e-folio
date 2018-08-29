import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import pagesList from '~/data/pages';
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
        <Link to="/realisations" href="/realisations">
          coucou
        </Link>
      </React.Fragment>
    );
  }
}

Pages.propTypes = {
  location: PropTypes.object.isRequired,
};


export default Pages;
