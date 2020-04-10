import React, { Component } from 'react';
import fire from '../config/Fire';
import 'bulma/css/bulma.css'

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error)
        })
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        test(this.state.email)
        .catch((error) => {
            console.log(error);
        })
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
                <div className="columns is-centered">
                    <div className="column is-half">
                        <form>
                            <div className="field">
                                <label className="label">Username</label>
                                <div className="control">
                                    <input value={this.state.username} className="input" type="text" name="username" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input value={this.state.email} className="input" type="email" name="email" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Password</label>
                                <div className="control">
                                    <input value={this.state.password} className="input" type="password" name="password" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="field is-grouped">
                                <div className="control">
                                    <button type="submit" onClick={this.login} class="button is-link">Login</button>
                                    <button onClick={this.signup} style={{marginLeft: '25px'}} className="button is-link">Sign up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        )
    }
}

export default Login;