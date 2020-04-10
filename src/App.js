import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire';
import Login from './component/Login'
import Home from './component/Home'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:{},
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if(user) {
        this.setState({user});
        // localStorage.setItem('user',user.uid);
      }else{
        this.setState({user : null});
        // localStorage.removeItem('user');
      }
    });
  }

  render(){
    return (
      <div className="App">
        {this.state.user ? (<Home username={this.state.user.email} />) : (<Login />)}
      </div>
    );
  }
}

export default App;
