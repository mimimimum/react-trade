import React from 'react';
import './Editprofile.css';
import Header from '../Header/Header';
import CardExampleGroups from './History.js';
import { editprofile, getUser } from '../../api'
import { Segment } from 'semantic-ui-react'

class Profile extends React.Component {
     
  state = { // set state can use in class component only
    id:'',
    username: localStorage.getItem('username'),
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    tel: '',
    allUsers: [],
    id: "",
    defaultDepartment: 0
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
    editprofile(this.state.firstname, this.state.lastname, this.state.username, this.state.password, this.state.email, this.state.tel)
      .then(data => {
        if (data.status === 200) {
          window.location.reload();
        } else {
          console.log('ey')
        }
      })
  }
  getUsers = () => {
    getUser()
      .then(data => this.setState({ allUsers: data }))
      .catch(err => console.error('Something went wrong.'))
  }


  componentDidMount() { // when render finish call is func
    this.getUsers()
  }


  render() {
    const posts = this.state.allUsers
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
                  <input type="text" name="password" placeholder="PASSWORD" value={this.state.password} onChange={this.onTextChange} />
                </div>
                <div class="field">
                  <label>FIRST NAME</label>
                  <input type="text" name="firstname" placeholder="FIRST NAME" value={this.state.firstname} onChange={this.onTextChange} />
                </div>
                <div class="field">
                  <label>LAST NAME</label>
                  <input type="text" name="lastname" placeholder="LAST NAME" value={this.state.lastname} onChange={this.onTextChange} />
                </div>
                <div class="field">
                  <label>ADDRESS</label>
                  <input type="text" name="address" placeholder="ADDRESS " value={this.state.address} onChange={this.onTextChange} />
                </div>
                <div class="field">
                  <label>E-MAIL</label>
                  <input type="text" name="email" placeholder="E-MAIL" value={this.state.email} onChange={this.onTextChange} />
                </div>
                <div class="field">
                  <label>MOBILE</label>
                  <input type="text" name="tel" placeholder="PHONE" value={this.state.tel} onChange={this.onTextChange} />
                </div>
                <button class="ui teal button" type="submit">OK</button>
              </form>
              <br />

            </Segment>
            <Segment>

              <h1>HISTORY</h1>
              {posts.length >= 0 ? //in { } is logic
                posts.map(post =>
                  <div className='ui segment'>
                    <p>Published by: {post.username}</p>
                  </div>
                )
                : null
              }
            </Segment>
          </div>
        </div>

      </div>


    );
  }
}

export default Profile;
