import React from 'react';
import {getUser} from '../../api'
import Header from '../Header/Header';
import { Button } from 'semantic-ui-react'

class Profile extends React.Component {
  state = {
        allUser: []
      }
    
        getItems = () => {
          getUser()
          .then(data => this.setState({ allUser: data }))
          .catch(err => console.error('Something went wrong.'))
      }
      componentDidMount() { // when render finish call is func
        this.getItems()
      }
    
     
      render() {
       // const posts = this.state.allPosts
    return (
      <div>
        < Header />
        <div role="list" class="ui divided relaxed list">
          <div class="ui horizontal segments">
            <div class="ui segment">
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
  
      </div>


    );
  }
}

export default Profile;
