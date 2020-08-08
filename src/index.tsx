import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
// import App from './App'
// import Game from './Game'
import Game from './Game.hook'

const render = (Component) => {
  ReactDOM.render(<Component />, document.getElementById('main'))
}

// if (module.hot) {
//   module.hot.accept('./Game', () => {
//     const nextApp = require('./Game').default
//     render(nextApp)
//   })
// }

// if (module.hot) {
//   module.hot.accept('./App', () => {
//     const nextApp = require('./App').default
//     render(nextApp)
//   })
// }

render(Game)
