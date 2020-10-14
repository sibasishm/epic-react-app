import '@reach/dialog/styles.css'

import React from 'react'
import ReactDOM from 'react-dom'
import VisuallyHidden from '@reach/visually-hidden'
import {Dialog} from '@reach/dialog'

import {Logo} from './components/logo'

function LoginForm({onSubmit, buttonText}) {
  const handleSubmit = e => {
    e.preventDefault()
    const {username, password} = e.target.elements

    onSubmit({
      username: username.value,
      password: password.value,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">{buttonText}</button>
    </form>
  )
}

function App() {
  const [modalType, setModalType] = React.useState('none')

  const closeModal = () => setModalType('none')

  const login = formData => {
    console.log('Login', formData)
  }

  const register = formData => {
    console.log('Regitser', formData)
  }

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
        <LoginForm onSubmit={login} buttonText="Login" />
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
        <LoginForm onSubmit={register} buttonText="Register" />
      </Dialog>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
