import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Example } from './Examples/AddFriendForm';
import AppRoute from './utility/route';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = React.lazy(() => import("./views/Login"));


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <AppRoute />
      {/* <Example /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
