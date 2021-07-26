
import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Admin from "./component/Admin/Admin";
import { useState } from "react";
function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/admin" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
