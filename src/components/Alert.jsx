import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ message }) => (
  <div>
    <span>{message}</span>
  </div>
);

Alert.propTypes = {
  message: PropTypes.string.isRequired
};

export default Alert;
