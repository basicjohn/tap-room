import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {

  return (
    <header>
      <ul>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "home")} href='/home'></a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "yearRound")} href='/yearRound'></a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "seasonal")} href='/seasonal'></a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "smallBatch")} href='/smallBatch'></a>
        </li>
        <li>
          <a type="submit"
            onClick={event => props.navigateTo(event, "reserve")} href='/reserve'></a>
        </li>
      </ul>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;