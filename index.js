import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
function validateForm() {
  var username = document.forms["signinForm"]["username"].value;
  var password = document.forms["signinForm"]["password"].value;

  if (username === "") {
    document.getElementById("usernameError").innerHTML = "Please enter your username.";
    return false;
  }

  if (password === "") {
    document.getElementById("passwordError").innerHTML = "Please enter your password.";
    return false;
  }

  return true;
}