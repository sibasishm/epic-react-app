import '@reach/dialog/styles.css'

import React from 'react'
import ReactDOM from 'react-dom'
import VisuallyHidden from '@reach/visually-hidden'
import {Dialog} from '@reach/dialog'

import {Logo} from './components/logo'

function App() {
  const [modalType, setModalType] = React.useState('none')

  const closeModal = () => setModalType('none')

  return (
    <>
      <Logo />
      <h1>Bookshelf</h1>
      <div>
        <button onClick={() => setModalType('login')}>Login</button>
        <button onClick={() => setModalType('register')}>Register</button>
      </div>
      <Dialog
        aria-label="Login Modal"
        isOpen={modalType === 'login'}
        onDismiss={closeModal}
      >
        <button className="close-button" onClick={closeModal}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>X Close</span>
        </button>
        <p>Login</p>
      </Dialog>
      <Dialog
        aria-label="Resgistration Modal"
        isOpen={modalType === 'register'}
        onDismiss={closeModal}
      >
        <button className="close-button" onClick={closeModal}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>X Close</span>
        </button>
        <p>Register</p>
      </Dialog>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
