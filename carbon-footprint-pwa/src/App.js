import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/"></Route>
        <Route path="/Forest"></Route>
        <Route path="/Statistics"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
