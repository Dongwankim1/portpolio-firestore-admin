
import "./App.css";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Admin from "./component/Admin/Admin";
import Menu from './component/Menu/Menu';
import React,{ useEffect, useState } from "react";
import firebase from './firebase'
function App() {
  const [user,setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(async ()=>{
    const user =await firebase.auth().onAuthStateChanged(user => {
      if (user) {
          //return user
          setUser(user);
          
          console.log('asdfaef1212')
          //dispatch(getBoardData());
      } else {
          //history.push('/admin')
      }

  })
  //setUser(user);
  },[])

  const logout = () => {
    firebase.auth().signOut();
    console.log("asdasd11221")
    setUser(null);
    //history.push('/admin')
}

  return (
    <div className="App">
      <BrowserRouter>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={user} logout={logout}/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} user={user}></Menu>
        <Switch>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/admin" component={()=><Admin user={user} setUser={setUser}/>}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
