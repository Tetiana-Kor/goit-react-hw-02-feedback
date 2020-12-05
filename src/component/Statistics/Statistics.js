import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul className={s.statistics}>
      <li className={s.list}>Good: {good} </li>
      <li className={s.list}>Neutral: {neutral} </li>
      <li className={s.list}>Bad: {bad}</li>
      <li className={s.list}>Total: {total}</li>
      <li className={s.list}>Pozitive feedback: {positivePercentage}% </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
