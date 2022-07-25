import './App.css';
import Card from './exhibit.js'
import Banner from './banner.js'
import IPComponent from './IPComponent.js'
import WebSocketComponent from "./webSocketComponent.js"

//this returns the html to be rendered to the index.html file
function App() {
  return (
    <div class="App App-header">
      <Banner heading="Sextant"/>
      <div class="Cards-container">
        <Card heading="Public IPv4 Address" children={<IPComponent url="https://api.ipify.org?format=json"/>}/>
        <Card heading="Public IPv6 Address" children={<IPComponent url="https://api64.ipify.org?format=json"/>}/>
        <Card heading="Latency" children={<WebSocketComponent/>}/>
      </div>
    </div>
  );
}


export default App;
