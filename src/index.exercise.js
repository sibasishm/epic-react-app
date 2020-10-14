import React from 'react'
import ReactDOM from 'react-dom'

import {Logo} from './components/logo'

function App() {
  return (
    <>
      <Logo />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => alert('Trying to login...')}>Login</button>
        <button onClick={() => alert('Trying to register...')}>Register</button>
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
