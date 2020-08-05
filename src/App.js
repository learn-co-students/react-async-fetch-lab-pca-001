import React, { Component } from "react"

export default class App extends Component {

  state = { astros: []}

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(json => this.setState({astros: json.people}))
  }

  render() {
    return (
      <div>
        {this.state.astros.map(astro => astro.name)}
      </div>
    )
  }
}