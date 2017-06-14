import React, { Component, createElement } from 'react'
import ReactDOM, { render } from 'react-dom'

class App extends Component {
  render() {
    return <div>App</div>
  }
}

render(<App />, document.getElementById('app'))
