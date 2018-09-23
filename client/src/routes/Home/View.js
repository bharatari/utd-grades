import React from 'react';
import classes from './styles.scss';
import { Form } from './components';

export default class HomeView extends React.Component {
  render() {
    return (
      <div className={classes.background}>
        <div className={classes.content}>
          <h2 className={classes.header}><strong>UT Dallas</strong> Grades</h2>
          <Form />
        </div>
      </div>
    );
  }
}
