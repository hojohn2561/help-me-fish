import Navbar from "./components/navbar/Navbar";
import Welcome from "./components/welcome/Welcome";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Welcome />
    </div>
  );
}

export default App;
