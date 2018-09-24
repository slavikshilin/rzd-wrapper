import React from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends React.Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {    
        const { onSubmitBtn, history } = this.props;
        onSubmitBtn(values.userName, values.password, history);
        
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmPassword = (rule, value, callback) => {
    //const { getFieldValue } = this.props.form

    if (value && (value.length < 3 || value.length > 20)) {
        callback('Пароль должен быть не менее 6-ти и не более 20-ти символов!')
    }

    callback()
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('userName') && getFieldError('userName');
    const passwordError = isFieldTouched('password') && getFieldError('password');
    return (
      <Form className="login-form" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Введите логин!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Логин" maxLength="20" />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [
            { required: true, message: 'Введите пароль!' }, 
            { validator: this.handleConfirmPassword }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Пароль" maxLength="20" />
          )}
        </FormItem>
        <FormItem>
          <Button
            className="login-form-button"
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Войти
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm