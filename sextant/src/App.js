import './App.css';
import Card from './card.js'
import Banner from './banner.js'

//this returns the html to be rendered to the index.html file
function App() {
  return (
    <div class="App App-header">
      <Banner heading="Sextant"/>
      <div class="Cards-container">
        <Card heading="Card Title"/>
        <Card heading="Card Title"/>
      </div>
    </div>
  );
}

export default App;
