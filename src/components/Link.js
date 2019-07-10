import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ active, children, onClick }) => {
  if (active) {
    return (<span>{children}</span>);
  }

  return (
    <span
      style={{ color: '#0366d6' }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;