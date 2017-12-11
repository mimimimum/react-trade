import React from 'react';
import './Profile.css';
import Header from '../Header/Header';


import { Button, Modal } from 'semantic-ui-react'



class Profile extends React.Component {

  render() {
    return (
      <div>
        < Header />
        <br></br>
        <br></br>


        <div role="list" class="ui divided relaxed list">


          <div class="ui horizontal segments">
            <div class="ui segment">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
              <a class="header">USERNAME</a><br/>
              <a class="header">FIRST NAME</a><br/>
              <a class="header">LAST NAME</a><br/>
              <a class="header">ADDRESS</a><br/>
              <a class="header">E-MAIL</a><br/>
              <a class="header">PHONE</a><br/>
            </div>
            <div class="ui segment"><a href ="/editprofile">< Button right basic color='pink'>EDIT PROFILE</Button></a></div>
          </div>


        </div>
        <br></br>
        <div class="ui six cards">
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
          <div class="ui raised card">
            <img class="ui image" src="/assets/images/wireframe/image.png" />
          </div>
        </div>
      </div>


    );
  }
}

export default Profile;
