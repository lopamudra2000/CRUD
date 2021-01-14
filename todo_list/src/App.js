import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import history from './history';
import NavBar from './components/NavBar';
import DeleteTask from './components/DeleteTask';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <>
    <NavBar/>
    <div className="App" style={{maxWidth:"50rem", margin:"4rem auto"}}>
        <Router history={history}>
        <Header/>
          <Switch>
            <Route exact path="/" component= {Home}/>
            <Route path="/add" component= {AddTask}/>
            <Route path="/edit/:id" component= {EditTask}/>
            <Route path="/delete/:id" component= {DeleteTask}/>
          </Switch>
        </Router>
    </div>
    </>
  )
}

export default App;
