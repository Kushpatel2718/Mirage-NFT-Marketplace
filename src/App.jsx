import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./screens/Home";
import AboutUs from "./screens/AboutUs";
import './App.css'
import Login from "./screens/Login";
import Signup from "./screens/Signup";

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </Router>          
  )
}

export default App
