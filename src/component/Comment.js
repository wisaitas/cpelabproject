import React from 'react'
import 'bulma/css/bulma.css'
import fire from '../config/Fire'

function Comment(props) {
    return (
        <div style={{marginLeft: '10px'}}>
            <label for="Comment">Comment</label>
            <br />
            <textarea id="Commentuser"  rows="4" cols="200">
            </textarea>
            <div className="field is-grouped">
                <div className="control">
                <button type="submit" class="button is-link" onClick={()=>comment(props.username)}>Post</button>
                </div>
            </div>
        </div>        
    )
}

function comment(props){
    var cm = document.getElementById('Commentuser').value
    var firebaseRef = fire.database().ref()
    firebaseRef.child("Text").set({
        email: props.username,
        comment: cm
    })
    // var newPostKey = fire.database().ref().child('post').push().key
    // var updates = {}
    // alert(newPostKey)
    // updates['post/' + newPostKey] = cm
    // return fire.database().ref().update(updates)
}

export default Comment