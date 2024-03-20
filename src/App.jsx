import "./app.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Login from './components/login/Login.jsx'
import Home from './components/home/Home.jsx';
import Details from "./components/details/Details.jsx";
import NoPage from "./components/noPage/NoPage.jsx";

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/">
            <Route index element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path="details/:id" element={<Details/>}/>
            <Route path="*" element={<NoPage/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
