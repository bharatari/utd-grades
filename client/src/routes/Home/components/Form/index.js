import { Field, reduxForm } from 'redux-form';
import { Form } from 'antd';

class HomeForm extends React.Component {
  render() {
    return (
      <Form></Form>
    )
  }
}

export default reduxForm({
  form: 'homeForm',
})(HomeForm);
