import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import { useState, useEffect } from 'react'
import LoginSignupModal from './components/Modals/LoginSignupModal'
import auth from './startup/firebase'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [user, setUser] = useState(null)
  //methods
  const handleClose = () => setShowLogin(false);
  const handleShow = () => setShowLogin(true);

  //authenticationMethods
  const authListener = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      } else
        setUser('')
    })
  }

  useEffect(() => {
    authListener()
  }, [])

  return (
    <div className="App">
      <Header
        setShowLogin={handleShow}
        user={user}
      />
      <div style={{ paddingTop: '100px' }}>
        <LoginSignupModal
          handleClose={handleClose}
          show={showLogin}

        />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          </a>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        end
      </div>
    </div>
  );
}

export default App;
