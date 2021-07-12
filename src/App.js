import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";
import Freshwater from "./components/assistant/Freshwater";
import Saltwater from "./components/assistant/Saltwater";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route path="/freshwater" component={Freshwater} />
        <Route path="/saltwater" component={Saltwater} />
      </Switch>
    </div>
  );
}

export default App;
