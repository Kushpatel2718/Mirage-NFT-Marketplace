import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import './App.css'

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>          
  )
}

export default App
