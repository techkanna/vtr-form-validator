import React from 'react';
import './App.css';

function App() {
  // Show input error message
  function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
  }

  // Show success outline
  function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
  }

  // Check email is valid
  function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
  }

  // Check required fields
  function checkRequired(inputArr) {
    let isRequired = false;
    inputArr.forEach(function (input) {
      if (input.value.trim() === '') {
        showError(input, `${getFieldName(input)} is required`);
        isRequired = true;
      } else {
        showSuccess(input);
      }
    });

    return isRequired;
  }

  // Check input length
  function checkLength(input, min, max) {
    if (input.value.length < min) {
      showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
      );
    } else if (input.value.length > max) {
      showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
      );
    } else {
      showSuccess(input);
    }
  }

  // Check passwords match
  function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      showError(input2, 'Passwords do not match');
    }
  }

  // Get fieldname
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
  const getSubmit = (e) => {
    e.preventDefault();

    const username = e.target[0];
    const email = e.target[1];
    const password = e.target[2];
    const password2 = e.target[3];
    if (checkRequired([username, email, password, password2])) return;

    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
  };
  return (
    <div className="container">
      <form className="form" onSubmit={getSubmit}>
        <h2>Register With Us</h2>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
          />
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter email"
          />
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
          />
          <small>Error message</small>
        </div>
        <div className="form-control">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Enter password again"
          />
          <small>Error message</small>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
