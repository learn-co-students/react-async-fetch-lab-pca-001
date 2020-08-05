// create your App component here
import React, { Component } from 'react';

class App extends Component {

  componentDidMount(){
    fetch(`http://api.open-notify.org/astros.json`)
      .then( res => res.json())
      .then( json => console.log(json))
      .catch( err => console.log(err));
  }

  render() {

    return (
      <div className="App">
      </div>
    );
  }
}

export default App;