import React from 'react';
import './Editprofile.css';
import Header from '../Header/Header';
import CardExampleGroups from './History.js';
import { editprofile } from '../../api'
import { Segment} from 'semantic-ui-react'



class Profile extends React.Component {
  state = { // set state can use in class component only
    username: localStorage.getItem('username') ,
    password: '',
    firstname: '',
    lastname:'',
    email:'',
    address:'',
    tel:''
  }

  onTextChange = event => { // can use for all that have name and value
    const name = event.target.name
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    event.preventDefault() // no refresh
    editprofile(this.state.firstname,this.state.lastname,this.state.username,this.state.password,this.state.email,this.state.tel)
      .then(data => {
        if (data.status === 200) {
          window.location.reload();
        }
      })
  }
  render() {
    return (
      <div >
      < Header />
       <div class="content">
          <div class="ui horizontal segments">
            <Segment>
            <h1>EDIT YOUR PROFILE</h1>
              <form class="ui form" onSubmit={this.onSubmit}>
                <div class="field">
                  <label>PASSWORD</label>
                  <input placeholder="PASSWORD"  value={this.state.password} onChange={this.onTextChange} />
                </div>
                <div class="field">
                  <label>FIRST NAME</label>
                  <input placeholder="FIRST NAME"  value={this.state.firstname} onChange={this.onTextChange} />
                </div>
                <div class="field">
                  <label>LAST NAME</label>
                  <input placeholder="LAST NAME" value={this.state.lastname} onChange={this.onTextChange} />
                </div>
                <div class="field">
                  <label>ADDRESS</label>
                  <input placeholder="ADDRESS " value={this.state.address} onChange={this.onTextChange} />
                </div>
                <div class="field">
                  <label>E-MAIL</label>
                  <input placeholder="E-MAIL"  value={this.state.email} onChange={this.onTextChange}/>
                </div>
                <div class="field">
                  <label>MOBILE</label>
                  <input placeholder="PHONE"  value={this.state.tel} onChange={this.onTextChange}/>
                </div>
              </form>
              <br />
              <button class="ui teal button" role="button" type="submit">OK</button>
            </Segment>
            <Segment>

              <h1>HISTORY</h1>
              <CardExampleGroups />
              <CardExampleGroups />
              <CardExampleGroups />

            </Segment>
          </div>
        </div>

      </div>


    );
  }
}

export default Profile;
