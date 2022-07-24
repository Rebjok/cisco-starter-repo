import './App.css';
import Card from './card.js'

//this returns the html to be rendered to the index.html file
function App() {
  return (
    <div class="App App-header">
      <h1 class="Heading-banner">Sextant</h1>
      <div class="Cards-container">
        <Card heading="Card Title"/>
        <Card heading="Card Title"/>
      </div>
    </div>
  );
}

export default App;
