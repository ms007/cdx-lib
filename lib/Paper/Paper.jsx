import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './Paper.css';

const Paper = ({ className, children }) => {
  const classes = cx('Paper', className);
  return <div className={classes}>{children}</div>;
};

Paper.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

Paper.defaultProps = {
  className: ''
};

export default Paper;
