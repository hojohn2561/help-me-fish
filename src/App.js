import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/" component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
