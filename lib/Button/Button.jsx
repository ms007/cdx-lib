import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Button.css';

const Button = ({ label, primary, flat }) => {
  const classes = cx('Button', {
    'Button--primary': primary,
    'Button--flat': flat
  });

  return (
    <button className={classes} type="button">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  flat: PropTypes.bool
};

Button.defaultProps = {
  primary: true,
  flat: false
};

export default Button;
