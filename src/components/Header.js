import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  const footerStyles = {

  }
  return (
    <header style={navbarStyles}>
      <ul>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "home")}
            style={linkStyles} href='/home'></a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "yearRound")}
            style={linkStyles} href='/yearRound'></a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "seasonal")}
            style={linkStyles} href='/seasonal'></a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "smallBatch")}
            style={linkStyles} href='/smallBatch'></a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "reserve")}
            style={linkStyles} href='/reserve'></a>
        </li>

      </ul>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;