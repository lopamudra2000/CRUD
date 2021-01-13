import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {Home} from './components/Home';
import AddTask from './components/AddTask';
import EditTask from './components/EditTask';
import GoogleAuth from './components/GoogleAuth';
import history from './history';

import 'bootstrap/dist/css/bootstrap.min.css'
const App = () => {
  return (
    <>
    <h1>CRUD App</h1>
    <div><GoogleAuth/></div>
    
    <div className="App" style={{maxWidth:"50rem", margin:"4rem auto"}}>
      
        <Router history={history}>
          <Switch>
            <Route exact path="/" component= {Home}/>
            <Route path="/add" component= {AddTask}/>
            <Route path="/edit/:id" component= {EditTask}/>
          </Switch>
        </Router>
    </div>
    </>
  )
}

export default App;
