import React from 'react';
import classes from './styles.scss';
import { Card } from 'antd';
import classNames from 'classnames';

const dummyItem = classNames(
  classes.card,
  classes.dummy
);

function LinkCard({ name, backgroundColor, icon, link, dummy }) {
  function handleClick(e) {
    e.preventDefault();
  }

  // Dummy items are used so that items maintain the
  // same width in the flexbox container
  if (dummy) {
    return (
      <div className={dummyItem}></div>
    );
  }

  return (
    <div className={classes.card} style={{ backgroundColor }}>
      <p className={classes.name}>{name}</p>
    </div>
  );
};

export default LinkCard;