import React from 'react';
import classes from './styles.scss';
import { Field, reduxForm } from 'redux-form';
import { Form, Popover, Input } from 'antd';
import { AutoComplete } from 'components/';

const renderField = ({ input, ...props }) => (
  <Input {...input} {...props} />
);

class HomeForm extends React.Component {
  render() {
    const { handleSubmit, sections, onSearch, pristine, reset, submitting, onSelect } = this.props;
    const content = (
      <div>
        <p>You can search for:</p>
        <ul>
          <li>A specific section: CS 1337.501</li>
          <li>A whole course: CS 1337</li>
          <li>A professor's name (first or last or both): Jason Smith</li>
          <li>A specific semester: CS 1337 fall 2017</li>
          <li>Everything together: CS 1337.1 fall 2017 jason smith</li>
        </ul>
      </div>
    );

    return (
      <Form onSubmit={handleSubmit}>
        <Field name="search" size="large" className={classes.input} placeholder="ex. CS 1337 Fall 2017 Smith" component={renderField} />
        <Popover content={content} className={classes.hint} placement="bottom">
          <span style={{ textAlign: 'center' }}>
            Need to know what you can enter? <span style={{ textDecoration: 'underline' }}>Pretty much anything.</span>
          </span>
        </Popover>
      </Form>
    )
  }
}

export default reduxForm({
  form: 'homeForm',
  destroyOnUnmount: false,
})(HomeForm);
