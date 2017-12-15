import React from 'react';
import './Editprofile.css';
import Header from '../Header/Header';
import CardExampleGroups from './History.js';
import { editprofile, getUser } from '../../api'
import { Segment, Input, Button, Label, Form,TextArea } from 'semantic-ui-react'

class EditProfile extends React.Component {

  state = { // set state can use in class component only
    id: '',
    username: localStorage.getItem('username'),
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: '',
    allUsers: [],
    id: this.props.match.params.id,
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
    editprofile(this.state.id, this.state.address, this.state.email, this.state.phone)
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
        <Segment.Group horizontal>
          {
            posts.length >= 0
              ? //in { } is logic
              posts.map(post =>
                post.username == localStorage.getItem('username') ?
                  (

                    <Segment>
                      <h1>EDIT YOUR PROFILE</h1>
                      <Form class="ui form" onSubmit={this.onSubmit}>
                        <Segment >
                          <Label color='red' ribbon>ADDRESS</Label>
                          <TextArea autoHeight type="text" name="address" placeholder={post.address} value={this.state.address} onChange={this.onTextChange} required />
                        </Segment >
                        <Segment >
                          <Label color='red' ribbon>E-MAIL</Label>
                          <Input type="text" name="email" placeholder={post.email} value={this.state.email} onChange={this.onTextChange} required />
                        </Segment >
                        <Segment >
                          <Label color='red' ribbon>PHONE</Label>
                          <Input type="text" name="phone" placeholder={post.phone} value={this.state.phone} onChange={this.onTextChange} required />
                        </Segment >
                        <br />
                        <br />
                        <Button inverted color='red' type='submit'>SUBMIT</Button>
                      </Form>
                      <br />
                    </Segment>
                  )
                  :
                  null
              )
              :
              null
          }
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

        </Segment.Group>
      </div>


    );
  }
}

export default EditProfile;
