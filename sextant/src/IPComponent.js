import React, { Component } from 'react';
// import './Exhibit.css';

class IPComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      ipObject : {ip:"IP not fetched"},
    };

  }

  componentDidMount() {
    fetch('https://api64.ipify.org?format=json', {method: "GET"})
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ipObject: data,
        });
      });
  }

  render() {
      return (
          <div className="Exhibit">
              <p>{this.state.ipObject.ip}</p>
          </div>
      );
  }
}

export default IPComponent;
