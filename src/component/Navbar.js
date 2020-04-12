import React from 'react'
import fire from '../config/Fire'
 
function Navbar(props) {
    return (
       <nav className="navbar" role="navigation" aria-label="main navigation">
           <div className="navbar-brand">
               <h1 className="navbar-item" href="#">
                    Comment about Covid-19 and information Covid-19
               </h1>
           </div>
           <div id="navbarBasicExample" className="navbar-menu">
               <div className="navbar-start">
 
               </div>
               <div className="navbar-end">
                   <div className="navbar-item">
                       <div className="buttons">
                           <h3 id="t1">
                               {props.username}
                           </h3>
                           <button className="button is-light" onClick={()=>logout()}>
                               Logout
                           </button>
                       </div>
                   </div>
               </div>
           </div>
       </nav>
 
   )
}

function logout() {
    fire.auth().signOut();
}
 
export default Navbar

