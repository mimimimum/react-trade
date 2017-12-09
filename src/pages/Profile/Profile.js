import React from 'react';  
import './Profile.css';

import { Button, Modal } from 'semantic-ui-react'



class Profile extends React.Component { 
  

  render() {
    return (
      <div>
         <div><a href ="/Upload"><button class="ui button" role="button">Upload</button></a>
      <h2 class="ui icon center aligned header">
        <i aria-hidden="true" class="users circular icon"></i>
        <div class="content">PROFILE</div>
      </h2>
      <img class="ui large centered image" src="/assets/images/wireframe/centered-paragraph.png" />
    </div>
    </div>
    );
  }
}

export default Profile;
