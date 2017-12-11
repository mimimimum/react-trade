import React from 'react';
import './Editprofile.css';
import Header from '../Header/Header';
import CardExampleGroups from './History.js';

import { } from 'semantic-ui-react'



class Profile extends React.Component {

  render() {
    return (
      <div >
        < Header />

        <div class="content">
          <div class="ui horizontal segments">
            <div class="ui segment">
            <h1>EDIT YOUR PROFILE</h1>
              <img class="ui image" src="/assets/images/wireframe/image.png" />
              <form class="ui form">
                <div class="field">
                  <label>USERNAME</label>
                  <input placeholder="USERNAME" />
                </div>
                <div class="field">
                  <label>FIRST NAME</label>
                  <input placeholder="FIRST NAME" />
                </div>
                <div class="field">
                  <label>LAST NAME</label>
                  <input placeholder="LAST NAME" />
                </div>
                <div class="field">
                  <label>ADDRESS</label>
                  <input placeholder="ADDRESS " />
                </div>
                <div class="field">
                  <label>E-MAIL</label>
                  <input placeholder="E-MAIL" />
                </div>
                <div class="field">
                  <label>MOBILE</label>
                  <input placeholder="PHONE" />
                </div>
              </form>
              <br />
              <button class="ui teal button" role="button">OK</button>
            </div>
            <div class="ui segment">

              <h1>HISTORY</h1>
              <CardExampleGroups />
              <CardExampleGroups />
              <CardExampleGroups />

            </div>
          </div>
        </div>

      </div>


    );
  }
}

export default Profile;
