import React from 'react';
import PropTypes from 'prop-types';
import s from './Notification.module.css';

export default function Notification({ message }) {
  return <div className={s.message}>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
