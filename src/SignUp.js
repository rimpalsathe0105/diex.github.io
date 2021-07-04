import React from 'react';
import forMainPageImage from './forMainPage.png';


export default function SignUp() {
    return (
        <div className="SignUp">
            <h1> <marquee>Coming Soon</marquee> </h1>
            <div className="Image_Section">
                <img src={forMainPageImage} width="600" height="500" className="Logo"></img> <br></br>
            </div> 
            <div className="g-signin2" data-onsuccess={onSuccess}></div>
        </div>
    );
}

function onSuccess(googleUser) {
    console.log('Logged in as: ' + JSON.stringify(googleUser.getBasicProfile().getName()));
  }