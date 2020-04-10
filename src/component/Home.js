import React, { Component } from 'react';
import fire from '../config/Fire';
// import Comment from './Comment';
import Navbar from './Navbar'
import Comment from './Comment'

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }


    render() {
        return(
            // <nav className="navbar" role="navigation" aria-label="main navigation">
            //     <div className="navbar-brand">
            //         <a className="navbar-item" href="/">
            //             Comment about Covid-19 and information Covid-19
            //         </a>
            //     </div>
            //     <div id="navbarBasicExample" className="navbar-menu">
            //         <div className="navbar-start">
            //         </div>
            //         <div className="navbar-end">
            //             <div className="navbar-item">
            //                 <div className="buttons">
            //                     <h3 className="navbar-item">
            //                         {this.props.username}
            //                     </h3>
            //                     <button className="button is-light" onClick={this.logout}>Logout</button>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </nav>
            <div>
                <Navbar username={this.props.username} />
                <Comment username={this.props.username} />
            </div>
        )
    }
}

export default Home;

