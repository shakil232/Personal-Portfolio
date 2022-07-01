import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home'
import AboutDetails from './Components/Details/AboutDetails/AboutDetails'
import ProjectDetails from './Components/Details/ProjectDetails/ProjectDetails'
import BlogDetails from './Components/Details/BlogDetails/BlogDetails'
import ContactDetails from './Components/Details/ContactDetails/ContactDetails'

function App() {


  return (
    <div className="main-background">
      <Router >
        <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about" element={<AboutDetails/>} />
        <Route exact path="/works" element={<ProjectDetails/>} />
        <Route exact path="/Blog" element={<BlogDetails/>} />
        <Route exact path="/contact" element={  <ContactDetails/>} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>

  );
}


export default App;
