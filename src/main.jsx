import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Nav from "./components/Nav.jsx"
import Wrapper from "./components/Wrapper.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav>Shamil</Nav>
    <br/>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>,
)

