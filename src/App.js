import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
