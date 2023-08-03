import './App.css';
import './sign.js';

function App() {
  return (

<html>
<head>
  <title>Login Page</title>
  
</head>
<body>
  <div class="container">
    <h2>Login</h2>
    <form id="loginForm">
      <div class="form-group">
        <label for="username">Username:</label>
       <input type='text' placeholder='Enter user Name'></input>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
      </div>
      <div class="form-group">
        <button type="submit">Login</button>
        <diiv class="congr button">
        
       
        </diiv>
      </div>
    </form>
  </div>

   
</body>
</html>

)
};

export default App;
 