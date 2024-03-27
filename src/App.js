import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import User from './users/User';
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {



  // async componentDidMount() {
  //   this.setState({loading:true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({users:res.data, loading:false})
  //   console.log(res.data)
    
  // }

   
      return(
        <GithubState>
          <AlertState>
  <Router>
        <div className="App">
          <Navbar/>
            <div className='container'>
        <Alert/>
        <Switch>
          <Route exact path='/' component={Home} 
          />
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' component={User}/>
          <Route component={NotFound}/>
        </Switch>
       
   </div>
   
  </div>
  </Router>
  </AlertState>
  </GithubState>
      );
    
}

export default App;
