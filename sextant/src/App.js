import './App.css';
import Card from './exhibit.js'
import Banner from './banner.js'
import IPComponent from './IPComponent.js'

//this returns the html to be rendered to the index.html file
function App() {
  return (
    <div class="App App-header">
      <Banner heading="Sextant"/>
      <div class="Cards-container">
        <Card heading="IPv4" children={<IPComponent/>}/>
        <Card heading="IPv6" children={<IPComponent/>}/>
      </div>
    </div>
  );
}


export default App;
