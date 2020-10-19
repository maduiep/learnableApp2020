import React from 'react';
import Navbar from '../Navbar/Navbar'

const withNavbar = (Component, { navProps, componentProps }) => (
  <>
    <Navbar {...navProps} />
    <Component {...componentProps} />
  </>
)

export default withNavbar;
