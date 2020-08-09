import React, { Component, ReactElement } from 'react'

class Hello extends Component {
  render(): ReactElement {
    return <h1>Hello</h1>
  }
}

class App extends Component {
  render(): ReactElement {
    return <Hello />
  }
}

export default App
