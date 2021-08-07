import Navbar from "./components/navbar/Navbar";
import { Route, Switch } from "react-router-dom";

import Freshwater from "./components/assistant/Freshwater";
import Welcome from "./components/welcome/Welcome";
import Saltwater from "./components/assistant/Saltwater";
import { FreshwaterFishDataProvider } from "./context/freshwaterFishDataContext";
import { SaltwaterFishDataProvider } from "./context/saltwaterFishDataContext";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        {/* Provide entire web-app with all fish data because can't use context dynamic. Since not much data, cost shouldn't be much, and can just provide it and use what's necessary  */}
        <SaltwaterFishDataProvider>
          <FreshwaterFishDataProvider>
            <Route exact path="/" component={Welcome} />
            {/* Instead of passing a component prop to Route, using the implicit children prop. This way, can use the context providers */}
            {/* 
            <FreshwaterFishDataProvider>
              <Route path="/freshwater" component={Freshwater} />
            </FreshwaterFishDataProvider>
            <SaltwaterFishDataProvider>
              <Route path="/saltwater" component={Saltwater} />
            </SaltwaterFishDataProvider> 
            */}
            <Route path="/freshwater">
              <Freshwater />
            </Route>
            <Route path="/saltwater">
              <Saltwater />
            </Route>
          </FreshwaterFishDataProvider>
        </SaltwaterFishDataProvider>
      </Switch>
    </div>
  );
}

export default App;
