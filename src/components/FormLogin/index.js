// Login Form

import React, { Component } from 'react';
import { render } from '@testing-library/react';
import styles from './LoginForm.module.css';
import classnames from 'classnames';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      isPasswordValid: null,
      isEmailValid: null,
    };
  }
  handleEmailChange = (event) => {
    const EMAIL_PATTERN = /\S+@\S+\.\S+/;
    this.setState({
      userEmail: event.target.value ,
      isEmailValid: EMAIL_PATTERN.test(this.state.userEmail),
    });
  };
  handlePasswordChange = (event) => {
    const PASSWORD_PATTERN = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?\d)[A-Za-z0-9_@#%!?^\-]{8,60}$/;
    this.setState({
      userPassword: event.target.value,
      isPasswordValid: PASSWORD_PATTERN.test(this.state.userPassword),
    });

  };

  /*
  handleCommonChange = ({target: {name, value}}) => {
      this.setState({ [name]: value}); 
  }
*/

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    const { userEmail, userPassword, isPasswordValid, isEmailValid } = this.state;
    const passStyleClass = classnames(styles.input, {
      [styles.inputValid]: isPasswordValid,
    });
    const emailStyleClass = classnames(styles.input, {
      [styles.inputValid]: isEmailValid,
    });
    /*
    const passStyleClass = `${styles.input} ${
      isPasswordValid && styles.inputValid
    }`;
    */
    return (
      <form className={styles.container} onSubmit={this.handleSubmit}>
        <input
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={this.handleEmailChange}
          placeholder="user email"
          className={emailStyleClass}
        />
        <input
          type="password"
          name="userPassword"
          value={userPassword}
          onChange={this.handlePasswordChange}
          placeholder="user pass"
          className={passStyleClass}
        />
        <button type="submit"> LOGIN</button>
      </form>
    );
  }
}
export default FormLogin;
