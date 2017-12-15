import React from 'react';
import { login } from '../../api'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Form, Button, Grid, Label, Input, Segment } from 'semantic-ui-react'

class Login extends React.Component {
  state = { // set state can use in class component only
    username: '',
    password: ''
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
    login(this.state.username, this.state.password)
      .then(data => {
        if (data.status === 200) {
          console.log(this)
          localStorage.setItem('username', this.state.username)   //keep username to localstroage
          this.props.history.replace('/home') // can use when import to file routes // redirect
        }
      })
  }

  render() {
    return (
<div>
<Header />
<Grid color='black'>
<Grid columns={3}>
  <Grid.Row>
    <Grid.Column>
    </Grid.Column>
    <Grid.Column>
      <Segment padded>

        <Form className='ui large form' onSubmit={this.onSubmit}>
          <Form.Field>
            <label>USERNAME</label>
            <Form.Input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.onTextChange} required />

            <label>PASSWORD</label>
            <Form.Input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.onTextChange} required />
            <Button type='submit' className='ui teal fluid button'>Log in</Button>
          </Form.Field>
        </Form>
      </Segment>
    </Grid.Column>
    <Grid.Column>
    </Grid.Column>
  </Grid.Row>
</Grid>
</Grid>
</div>



    );
  }
}

export default Login;
