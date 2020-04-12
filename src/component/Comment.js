import React from 'react'
import 'bulma/css/bulma.css'
import fire from '../config/Fire'

class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            country: '',
            comment: '',
        }
    }

    comment() {
        var cm = document.getElementById('Commentuser').value
        var ct = document.getElementById('country').value
        var n1 = document.getElementById('name01').value
        var n2 = document.getElementById('name02').value
        var db = fire.firestore()
        var user = fire.auth().currentUser
        if(user != null){
            user.providerData.forEach(function(profile){
                db.collection('comment').doc(profile.email).set({
                    name: n1 + " " + n2,
                    country: ct,
                    comment: cm,
                })
            })
        }                   
    }

    openpost() {
        var db = fire.firestore()
        var user = fire.auth().currentUser
        if(user != null){
            user.providerData.forEach(function (profile) {
                db.collection('comment').doc(profile.email).onSnapshot(function(doc){
                    if(doc.data() != null){
                        db.collection('inputuser').doc(profile.email).onSnapshot(function(doc){
                            document.getElementById('hh1').innerHTML = "User : " + doc.data().name
                        })
                        document.getElementById('hh2').innerHTML = "Full name : " + doc.data().name
                        db.collection('inputuser').doc(profile.email).onSnapshot(function(doc){
                            document.getElementById('hh3').innerHTML = "Your Email : " + doc.data().email
                        })
                        document.getElementById('hh4').innerHTML = "Your Country : " + doc.data().country
                        document.getElementById('hh5').innerHTML = "Your Comment : " + doc.data().comment
                    }else{
                        alert('you never click post')
                    }
                })
              });
        }
    }

    render() {
        var user = fire.auth().currentUser
        if (user != null) {
            user.providerData.forEach(function (profile) {
              console.log("  Email: " + profile.email);
            });
        }
        return (
            <div style={{marginLeft: '10px'}}>
                <div className="field">
                    <label className="label">Fullname</label>
                        <div className="control">
                            <input id="name01"  type="text"/>
                            <input style={{marginLeft: '10px'}} id="name02"  type="text"/>
                        </div>

                </div>
            <div className="field">
                <label className="label">Country</label>
                <div className="control">
                    <input id="country" className="input" type="text"/>
                </div>
            </div>
            <label for="Comment">Your Comment about Covid-19</label>
            <br />
            <textarea id="Commentuser"  rows="4" cols="220">
            </textarea>
            <div className="field is-grouped">
                <div className="control">
                <button type="submit" class="button is-link" onClick={() => this.comment()}>PostYourProFile</button>
                </div>
            </div>
            <label for="Post" style={{marginLeft: '48%'}}>Your Informations</label>
            <div className="field is-grouped" style={{marginLeft: '48%'}}>
                <div className="control">
                <button type="submit" class="button is-link" onClick={() => this.openpost()}>OpenProfile</button>
                </div>
            </div>
            <div style={{marginLeft: '15px'}}>
                <h1 id="hh1"></h1> 
                <h1 id="hh2"></h1>
                <h1 id="hh3"></h1>
                <h1 id="hh4"></h1>
                <h1 id="hh5"></h1>
            </div>
        </div>   
        )
    }
}

export default Comment