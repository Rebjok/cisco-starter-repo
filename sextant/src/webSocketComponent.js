import React, { Component } from 'react';
// import './Exhibit.css';

class WebSocketComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      utf8: null,
    }
  }

  componentDidMount() {
    var W3CWebSocket = require('websocket').w3cwebsocket;

    var client = new W3CWebSocket('ws://localhost:55455', null);

    client.onerror = function() {
        console.log('Connection Error');
    };

    client.onopen = function() {
        console.log('WebSocket Client Connected');

        function sendNumber() {
            if (client.readyState === client.OPEN) {
                var number = Math.round(Math.random() * 0xFFFFFF);
                client.send(number.toString());
                setTimeout(sendNumber, 1000);
            }
        }
        sendNumber();
    };

    client.onclose = function() {
        console.log('echo-protocol Client Closed');
    };

    client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            var latency = Date.now() - e.data;
            this.setState({
              utf8: latency,
            });
        }
    }.bind(this);
  }

  render() {
      return (
          <div className="">
              <p>{this.state.utf8}</p>
          </div>
      );
  }
}

export default WebSocketComponent;
