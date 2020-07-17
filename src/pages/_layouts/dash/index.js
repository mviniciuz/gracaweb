import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

import SideMenu from '../../../components/SideMenu';

export default function authLayout({ children }) {
  return (
    <Wrapper>
      <SideMenu />
      {children}
    </Wrapper>
  );
}

authLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
