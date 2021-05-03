import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

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
        <Switch>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/about">
            <AboutDetails/>
          </Route>

          <Route path="/works">
            <ProjectDetails/>
          </Route>

          <Route path="/Blog">
            <BlogDetails/>
          </Route>

          <Route path="/contact">
            <ContactDetails/>
          </Route>
          
          <Route exact path="/">
            <Home />
          </Route>

        </Switch>
      </Router>
    </div>

  );
}


export default App;
