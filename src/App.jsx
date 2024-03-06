import "./app.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Login from './components/login/Login.jsx'
import Home from './components/home/Home.jsx';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/">
            <Route index element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
