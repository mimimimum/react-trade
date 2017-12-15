import React from 'react';
import { register } from '../../api'
import Header from '../Header/Header';
import { Input, Grid, Button, Form, Segment, Label } from 'semantic-ui-react'

class Register extends React.Component {
  state = { // set state can use in class component only
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    tel: "",
  }


  onTextChange = event => {
    const name = event.target.name
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  onSubmit = event => {
    event.preventDefault()
    register(this.state.firstname, this.state.lastname, this.state.username, this.state.password, this.state.email, this.state.tel)
      .then(data => {
        console.log(data);
        if (data.status === 200) {
          this.props.history.replace('/login')
        }
      })
  }



  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.onSubmit} >
        <Segment.Group horizontal>
          <Segment inverted color='black'>
          </Segment>

          <Segment inverted color='black' textAlign='center'>
            <Input type="text" name="firstname" placeholder="firstname" value={this.state.firstname} onChange={this.onTextChange} />
            <Label color='red' pointing='left'>Firstname</Label>
            <br/><br/>
            <Input type="text" name="lastname" placeholder="lastname" value={this.state.lastname} onChange={this.onTextChange} />
            <Label color='red' pointing='left'>Lastname</Label>
            <br/><br/>
            <Input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onTextChange} />
            <Label color='red' pointing='left'>Username</Label>
            <br/><br/>
            <Input type="text" name="password" placeholder="password" value={this.state.password} onChange={this.onTextChange} />
            <Label color='red' pointing='left'>Password</Label>
            <br/><br/>
            <Input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.onTextChange} />
            <Label color='red' pointing='left'>E-mail</Label>
            <br/><br/>
            <Input type="text" name="tel" placeholder="tel" value={this.state.tel} onChange={this.onTextChange} />
            <Label color='red' pointing='left'>Telephone</Label>
            <br/><br/>
            <Button inverted color='red' type='submit'>SUBMIT</Button>
          </Segment>
          <Segment inverted color='black'>
          </Segment>
        </Segment.Group>
      </form>
      </div>
    );
  }
}

export default Register;
