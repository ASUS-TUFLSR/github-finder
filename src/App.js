import React, {Fragment, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './users/Users';
import User from './users/User';
import Search from './users/Search';
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import GithubState from './context/github/GithubState';

const App = () => {

  const [alert , setAlert] = useState(null);


  // async componentDidMount() {
  //   this.setState({loading:true})
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
  //   &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)

  //   this.setState({users:res.data, loading:false})
  //   console.log(res.data)
    
  // }



//Set alert

 const showAlert = (msg, type) =>{
    setAlert({msg,type});

    setTimeout(() => setAlert(null), 3000);
 };

   
      return(
        <GithubState>
  <Router>
        <div className="App">
          <Navbar/>
            <div className='container'>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
               <Search 
                      setAlert={showAlert}
              />
                 <Users/>
            </Fragment>
          )} 
          />
          <Route exact path='/about' component={About}/>
          <Route exact path='/user/:login' component={User}/>
        </Switch>
       
   </div>
   
  </div>
  </Router>
  </GithubState>
      );
    
}

export default App;
