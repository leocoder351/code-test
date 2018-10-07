import React from 'react';
import PropTypes from 'prop-types';
import './Welcome.css';

function Welcome(props) {
  const style = {
    width: '100%',
    height: '50px',
    backgroundColor: 'blue',
    color: 'white',
    fontSize: '20px'
  };

  return (
    <h1 style={ style }>Hello, { props.name }</h1>
  )
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

Welcome.defaultProps = {
  name: 'Stranger'
};

export default Welcome;