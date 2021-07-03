import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const footerStyles = {

  }
  return (
    <header style={headerStyles}>
      <h1>{props.title}</h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;