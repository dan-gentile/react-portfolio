import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
