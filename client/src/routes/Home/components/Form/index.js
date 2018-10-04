import React from 'react';
import classes from './styles.scss';
import { Field, reduxForm } from 'redux-form';
import { Form, Input } from 'antd';

class HomeForm extends React.Component {
  render() {
    return (
      <Form>
        <Input className={classes.input} size="large" placeholder="ex. CS 1337" />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'homeForm',
})(HomeForm);
