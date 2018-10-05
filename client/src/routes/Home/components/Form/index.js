import React from 'react';
import classes from './styles.scss';
import { Field, reduxForm } from 'redux-form';
import { Form } from 'antd';
import { AutoComplete } from 'components/';

const renderField = ({ input, ...props }) => (
  <AutoComplete {...input} {...props} />
);

class HomeForm extends React.Component {
  render() {
    const { handleSubmit, sections, onSearch, pristine, reset, submitting } = this.props;

    return (
      <Form>
        <Field name="search" classes={classes.input} data={sections} placeholder="ex. CS 1337" component={renderField} onSearch={onSearch}
          uniqueKey="id" labelKey="name" />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'homeForm',
})(HomeForm);
