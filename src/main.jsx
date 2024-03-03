import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import App from './App.jsx'
import Login from './components/login/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route path="login" element={<Login/>}/>
          </Route>
        </Routes>
      </Router>
  </React.StrictMode>
)
