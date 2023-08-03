import './App.css';
import './index.js';

function App() {
return (
<html>
<head>
  <title>Share Your Recipe</title>
</head>
<body>
  <div class="container">
    <h1>Share Your Recipe</h1>
    <form id="recipeForm">
      <label for="recipeName">Recipe Name:</label>
     <input type='text' id='recipeName' required>
     </input>
      
      <label for="ingredients">Ingredients:</label>
      <textarea id="ingredients" required></textarea>
      
      <label for="instructions">Instructions:</label>
      <textarea id="instructions" required></textarea>
      
      <button type="submit">Submit Recipe</button>
    </form>
    
    <h2>Shared Recipes:</h2>
    <div id="recipeList"></div>
  </div>

 
</body>
</html>
)
};
